package backend.graphql

import backend.award.AwardType
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.points.Points
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.users.UsersRepository
import backend.users.Users
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class GroupsDataFetcher {

    @Autowired
    private lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @DgsQuery
    @Transactional
    fun getUsersInGroupWithPoints(@InputArgument groupId: Long): List<UserPointsType> {
        val users = usersRepository.findByGroups_GroupsId(groupId)
        val userIds = users.map { it.userId }
        val points = pointsRepository.findByStudent_UserIdIn(userIds)
        val bonuses = bonusesRepository.findByChestHistory_User_UserIdIn(userIds)

        return users.map { user ->
            val userBonuses = bonuses.filter{it.chestHistory.user.userId == user.userId}
            val userPoints = points.filter { it.student.userId == user.userId }
                .groupBy { it.subcategory }
                .mapNotNull { (subcategory, points) ->
                    val purePoints = points.filter { bonusesRepository.findByPoints(it).isEmpty() }
                    if (purePoints.isEmpty()){
                        if (points.any { bonusesRepository.findByPoints(it).isNotEmpty() }){
                            SubcategoryPointsType(
                                subcategory = subcategory,
                                points = PurePointsType(
                                    purePoints = null,
                                    partialBonusType = userBonuses.map { bonus ->
                                        if (bonus.award.awardType == AwardType.ADDITIVE) {
                                            PartialBonusType(
                                                bonuses = bonus,
                                                partialValue = bonus.points.value
                                            )
                                        } else
                                            PartialBonusType(
                                                bonuses = bonus,
                                                partialValue = 0 * bonus.award.awardValue
                                            )
                                    }
                                )
                            )
                        } else {
                            null
                        }
                    } else {
                        SubcategoryPointsType(
                            subcategory = subcategory,
                            points = PurePointsType(
                                purePoints = purePoints.first(),
                                partialBonusType = userBonuses.map { bonus ->
                                    if (bonus.award.awardType == AwardType.ADDITIVE) {
                                        PartialBonusType(
                                            bonuses = bonus,
                                            partialValue = bonus.points.value
                                        )
                                    } else
                                        PartialBonusType(
                                            bonuses = bonus,
                                            partialValue = purePoints.first().value * bonus.award.awardValue
                                        )
                                }
                            )
                        )
                    }
                }.groupBy { it.subcategory.category } // Grouping by category
                .map { (category, subcategoryPoints) ->
                    val sumOfPurePoints = subcategoryPoints.sumOf { it.points.purePoints?.value?.toDouble() ?: 0.0 }.toFloat()
                    val sumOfBonuses = subcategoryPoints.sumOf { subcategory ->
                        subcategory.points.partialBonusType.sumOf { it.partialValue.toDouble() }
                    }.toFloat()
                    val sumOfAll = sumOfPurePoints + sumOfBonuses

                    CategoryPointsType(
                        category = category,
                        subcategoryPoints = subcategoryPoints,
                        aggregate = CategoryAggregate(
                            category = category,
                            sumOfPurePoints = sumOfPurePoints,
                            sumOfBonuses = sumOfBonuses,
                            sumOfAll = sumOfAll
                        )
                    )
                }
            UserPointsType(user, userPoints)
        }
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

