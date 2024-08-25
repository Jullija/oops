package backend.graphql

import backend.award.AwardType
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.groups.GroupsRepository
import backend.points.Points
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.Users
import backend.users.WeekdayEnum
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.sql.Time

@DgsComponent
class GroupsDataFetcher {

    @Autowired
    private lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var groupsRepository: GroupsRepository

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var fileRepository: FileEntityRepository

    @DgsMutation
    @Transactional
    fun assignPhotosToGroups(@InputArgument editionId: Long): Boolean {
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val groups = groupsRepository.findByEdition(edition)
        val photosForGroups = fileRepository.findAllByFileType("image/group")

        if (groups.size > photosForGroups.size) {
            throw IllegalArgumentException("Not enough photos to assign to all groups. Missing ${groups.size - photosForGroups.size} photos." +
                    " Please upload more photos with fileType = image/group and try again.")
        }

        val shuffledPhotos = photosForGroups.shuffled()

        groups.zip(shuffledPhotos).forEach { (group, photo) ->
            group.imageFile = photo
            groupsRepository.save(group)
        }

        return true
    }

    @DgsQuery
    @Transactional
    fun getPossibleGroupsWeekdays(@InputArgument editionId: Long): List<String> {
        val edition = editionRepository
            .findById(editionId)
            .orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val groups = groupsRepository.findByEdition(edition)
        val weekdays = groups.map { it.weekday.name }.distinct()
        return weekdays
    }

    @DgsQuery
    @Transactional
    fun getPossibleGroupsTimeSpans(@InputArgument editionId: Long): List<TimeSpansType> {
        val edition = editionRepository
            .findById(editionId)
            .orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val groups = groupsRepository.findByEdition(edition)
        return groups.map { TimeSpansType(it.startTime, it.endTime) }.distinct()
    }

    @DgsQuery
    @Transactional
    fun getPossibleGroupDates(@InputArgument editionId: Long): List<GroupDateType> {
        val edition = editionRepository
            .findById(editionId)
            .orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val groups = groupsRepository.findByEdition(edition)
        return groups.map { GroupDateType(it.weekday, it.startTime, it.endTime) }.distinct()
    }

    @DgsQuery
    @Transactional
    fun getUsersInGroupWithPoints(@InputArgument groupId: Long): List<UserPointsType> {
        val group = groupsRepository.findById(groupId).orElseThrow { IllegalArgumentException("Invalid group ID") }
        val users = usersRepository.findByUserGroups_Group_GroupsId(groupId)
        val userIds = users.map { it.userId }
        val points = pointsRepository.findByStudent_UserIdIn(userIds)
        val bonuses = bonusesRepository.findByChestHistory_User_UserIdIn(userIds)
        val categories = categoriesRepository.findAll()
        val subcategories = subcategoriesRepository.findByEdition_EditionId(group.edition.editionId)

        return users.map { user ->
            val userBonuses = bonuses.filter { it.chestHistory.user.userId == user.userId }

            val userPoints = points.filter { it.student.userId == user.userId }
                .groupBy { it.subcategory }
                .mapNotNull { (subcategory, points) ->

                    val purePoints = points.filter { bonusesRepository.findByPoints(it).isEmpty() }
                    val allBonuses = userBonuses.filter { it.points.subcategory == subcategory }
                    SubcategoryPointsType(
                        subcategory = subcategory,
                        points = PurePointsType(
                            purePoints = if (purePoints.isNotEmpty()) purePoints.first() else null,
                            partialBonusType = allBonuses.map { bonus ->
                                PartialBonusType(
                                    bonuses = bonus,
                                    partialValue = if (bonus.award.awardType != AwardType.MULTIPLICATIVE) {
                                        bonus.points.value
                                    } else {
                                        purePoints.firstOrNull()?.value?.times(bonus.award.awardValue) ?: 0f
                                    }
                                )
                            }
                        )
                    )

                }
                .groupBy { it.subcategory.category } // Grouping by category
                .map { (category, subcategoryPoints) ->
                    createCategoryPointsType(category, subcategoryPoints, subcategories)
                }

            // Ensure all categories are included
            val userCategoriesWithDefaults = getUserCategoriesWithDefaults(categories, userPoints, subcategories)

            UserPointsType(user, userCategoriesWithDefaults)
        }
    }
    private fun getUserCategoriesWithDefaults(categories: List<Categories>, userPoints: List<CategoryPointsType>, subcategories: List<Subcategories>): List<CategoryPointsType> {
        return categories.filter{it.canAddPoints}.map { category ->
            userPoints.find { it.category == category } ?: CategoryPointsType(
                category = category,
                subcategoryPoints = subcategories.filter { it.category == category }.map { subcat ->
                    SubcategoryPointsType(
                        subcategory = subcat,
                        points = PurePointsType(
                            purePoints = null,
                            partialBonusType = emptyList()
                        )
                    )
                },
                aggregate = CategoryAggregate(
                    category = category,
                    sumOfPurePoints = 0f,
                    sumOfBonuses = 0f,
                    sumOfAll = 0f
                )
            )
        }
    }

    private fun getSubcategoryPointsWithDefaults(subcategoryPoints: List<SubcategoryPointsType>, subcategories: List<Subcategories>, category: Categories): List<SubcategoryPointsType> {
        val allSubcategoriesForCategory = subcategories.filter { it.category == category }
        return allSubcategoriesForCategory.map { subcat ->
            subcategoryPoints.find { it.subcategory == subcat } ?: SubcategoryPointsType(
                subcategory = subcat,
                points = PurePointsType(
                    purePoints = null,
                    partialBonusType = emptyList()
                )
            )
        }
    }

    private fun createCategoryPointsType(category: Categories, subcategoryPoints: List<SubcategoryPointsType>, subcategories: List<Subcategories>): CategoryPointsType{
        val subcategoryPointsWithDefaults = getSubcategoryPointsWithDefaults(subcategoryPoints, subcategories, category)

        val sumOfPurePoints = subcategoryPointsWithDefaults.sumOf { it.points.purePoints?.value?.toDouble() ?: 0.0 }.toFloat()
        val sumOfBonuses = subcategoryPointsWithDefaults.sumOf { subcategory ->
            subcategory.points.partialBonusType.sumOf { it.partialValue.toDouble() }
        }.toFloat()
        val sumOfAll = sumOfPurePoints + sumOfBonuses

        return CategoryPointsType(
            category = category,
            subcategoryPoints = subcategoryPointsWithDefaults,
            aggregate = CategoryAggregate(
                category = category,
                sumOfPurePoints = sumOfPurePoints,
                sumOfBonuses = sumOfBonuses,
                sumOfAll = sumOfAll
            )
        )
    }
}

data class UserPointsType(
    val user: Users,
    val categoriesPoints: List<CategoryPointsType>
)

data class CategoryPointsType(
    val category: Categories,
    val subcategoryPoints: List<SubcategoryPointsType>,
    val aggregate: CategoryAggregate
)

data class CategoryAggregate(
    val category: Categories,
    val sumOfPurePoints: Float,
    val sumOfBonuses: Float,
    val sumOfAll: Float
)

data class SubcategoryPointsType(
    val subcategory: Subcategories,
    val points: PurePointsType
)

data class PurePointsType(
    val purePoints: Points?,
    val partialBonusType: List<PartialBonusType>
)

data class PartialBonusType(
    val bonuses: Bonuses,
    val partialValue: Float
)

data class TimeSpansType(
    val startTime: Time,
    val endTime: Time
)

data class GroupDateType(
    val weekday: WeekdayEnum,
    val startTime: Time,
    val endTime: Time
)
