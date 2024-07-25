package backend.graphql

import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.edition.EditionRepository
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.Users
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import java.time.ZoneOffset

@DgsComponent
class UsersDataFetcher {

    @Autowired
    private lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    private lateinit var editionRepository: EditionRepository

    @Autowired
    private lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @DgsQuery
    @Transactional
    fun getStudentPoints(@InputArgument studentId: Long, @InputArgument editionId: Long): StudentPointsType {
        val user = usersRepository.findById(studentId).orElseThrow { IllegalArgumentException("Invalid student ID") }
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val points = pointsRepository.findAllByStudentAndSubcategory_Edition(user, edition)
        val bonuses = bonusesRepository.findByChestHistory_User_UserId(studentId)

        val subcategoryPoints = points.groupBy { it.subcategory }
            .map { (subcategory, points) ->
                val purePoints = points.filter { bonusesRepository.findByPoints(it).isEmpty() }
                SubcategoryPointsType(
                    subcategory = subcategory,
                    points = PurePointsType(
                        purePoints = if (purePoints.isNotEmpty()) purePoints.first() else null,
                        partialBonusType = bonuses.map { bonus ->
                            PartialBonusType(
                                bonuses = bonus,
                                partialValue = if (bonus.award.awardType == AwardType.ADDITIVE) {
                                    bonus.points.value
                                } else {
                                    purePoints.firstOrNull()?.value?.times(bonus.award.awardValue) ?: 0f
                                }
                            )
                        }
                    )
                )
            }.sortedWith(compareBy {
                it.points.purePoints?.createdAt?.toInstant(ZoneOffset.UTC)?.toEpochMilli() ?:
                it.points.partialBonusType.minOfOrNull { it.bonuses.createdAt?.toInstant(ZoneOffset.UTC)?.toEpochMilli() ?: 0 } ?: LocalDateTime.MIN
            })

        val sumOfPurePoints = subcategoryPoints.sumOf { it.points.purePoints?.value?.toDouble() ?: 0.0 }.toFloat()
        val sumOfBonuses = subcategoryPoints.sumOf { it.points.partialBonusType.sumOf { it.partialValue.toDouble() } }
            .toFloat()
        val sumOfAll = sumOfPurePoints + sumOfBonuses

        return StudentPointsType(
            user = user,
            subcategoryPoints = subcategoryPoints,
            sumOfPurePoints = sumOfPurePoints,
            sumOfBonuses = sumOfBonuses,
            sumOfAll = sumOfAll
        )
    }

    @DgsQuery
    @Transactional
    fun getSumOfPointsForStudentByCategory(@InputArgument studentId: Long, @InputArgument editionId: Long): List<CategoryPointsSumType> {
        val user = usersRepository.findById(studentId).orElseThrow { IllegalArgumentException("Invalid student ID") }
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val points = pointsRepository.findAllByStudentAndSubcategory_Edition(user, edition)
        val bonuses = bonusesRepository.findByChestHistory_User_UserId(studentId)

        return points.groupBy { it.subcategory.category }
            .map { (category, points) ->
                val purePoints = points.filter { bonusesRepository.findByPoints(it).isEmpty() }
                val purePointsSum = purePoints.sumOf { it.value.toDouble() }.toFloat()
                val bonusesSum = bonuses.filter { it.points.subcategory.category == category && it.points.subcategory.edition == edition }
                    .sumOf { it.points.value.toDouble() }.toFloat()
                val totalSum = purePointsSum + bonusesSum
                val maxPoints = subcategoriesRepository.findByCategoryAndEdition(category, edition)
                    .sumOf { it.maxPoints.toDouble() }.toFloat()

                CategoryPointsSumType(
                    category = category,
                    sumOfPurePoints = purePointsSum,
                    sumOfBonuses = bonusesSum,
                    sumOfAll = totalSum,
                    maxPoints = maxPoints
                )
            }
    }
}

data class StudentPointsType(
    val user: Users,
    val subcategoryPoints: List<SubcategoryPointsType>,
    val sumOfPurePoints: Float,
    val sumOfBonuses: Float,
    val sumOfAll: Float
)

data class CategoryPointsSumType(
    val category: Categories,
    val sumOfPurePoints: Float,
    val sumOfBonuses: Float,
    val sumOfAll: Float,
    val maxPoints: Float
)
