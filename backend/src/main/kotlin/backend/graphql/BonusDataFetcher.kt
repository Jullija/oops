package backend.graphql


import backend.award.Award
import backend.points.Points
import backend.points.PointsRepository
import backend.chestHistory.ChestHistoryRepository
import backend.award.AwardRepository
import backend.award.AwardType
import backend.awardEdition.AwardEditionRepository
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.chestHistory.ChestHistory
import backend.edition.Edition
import backend.edition.EditionRepository
import backend.groups.GroupsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.users.Users
import backend.users.UsersRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import kotlin.jvm.optionals.toSet



@DgsComponent
class BonusDataFetcher {

    @Autowired
    lateinit var bonusRepository: BonusesRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var chestHistoryRepository: ChestHistoryRepository

    @Autowired
    lateinit var awardRepository: AwardRepository

    @Autowired
    lateinit var awardEditionRepository: AwardEditionRepository

    @Autowired
    lateinit var groupsRepository: GroupsRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @DgsMutation
    @Transactional
    fun createBonus(chestHistoryId: Long, awardId: Long): createBonusPayload {
        val chestHistory = getChestHistory(chestHistoryId)
        checkExistingBonus(chestHistory)
        val award = getAward(awardId)

        checkMaxUsages(chestHistory.user, award)


        val userEditions = getUserEditions(chestHistory.user.userId)
        val awardEditions = getAwardEditions(award)

        val commonEditions = userEditions.intersect(awardEditions)

        if (commonEditions.isEmpty()) {
            throw IllegalArgumentException("User's edition is not in the award's editions.")
        }

        val edition = if (commonEditions.size > 1) {
            commonEditions.maxByOrNull { it.editionYear }!!
        } else {
            commonEditions.first()
        }

        val points = when (award.awardType) {
            AwardType.ADDITIVE -> createAdditivePoints(chestHistory, award)
            AwardType.ADDITIVE_NEXT -> createAdditiveNextPoints(chestHistory, award, edition)
            AwardType.ADDITIVE_PREV -> updateAdditivePrevPoints(chestHistory, award, edition)
            AwardType.MULTIPLICATIVE -> createMultiplicativePoints(chestHistory, award, edition)
        }

        val savedPoints = pointsRepository.save(points)
        val bonus = createBonusEntry(savedPoints, award, chestHistory)
        val savedBonus = bonusRepository.save(bonus)

        return createBonusPayload(savedBonus, savedPoints)
    }

    @DgsMutation
    @Transactional
    fun createPoints(studentId: Long, teacherId: Long, value: Long, subcategoryId: Long): Points {
        val student = getUsers(studentId)
        val teacher = getUsers(teacherId)
        val subcategory = getSubcategory(subcategoryId)

        val points = Points(
            student = student,
            teacher = teacher,
            value = value,
            subcategory = subcategory,
            label = ""
        )

        val savedPoints = pointsRepository.save(points)

        // Check all points the user has that are connected to some award
        val userPoints = pointsRepository.findAllByStudent(student)

        userPoints.forEach { point ->
            val bonuses = bonusRepository.findByPoints(point)
            bonuses.forEach { bonus ->
                val award = bonus.award
                if (award.awardType == AwardType.MULTIPLICATIVE) {
                    // Recompute the value and update points entry
                    val pointsInCategory = userPoints.filter { it.subcategory.category == award.category && bonusRepository.findByPoints(it).isEmpty() }
                    val totalPointsValue = pointsInCategory.sumOf { it.value }
                    point.value = (totalPointsValue * award.awardValue).toLong()
                    pointsRepository.save(point)
                } else {
                    // Future logic can be added here
                }
            }
        }

        return savedPoints
    }

    private fun getUsers(userId: Long): Users {
        return usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }
    }
    private fun getSubcategory(subcategoryId: Long): Subcategories {
        return subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Invalid subcategory ID") }
    }

    private fun getChestHistory(chestHistoryId: Long): ChestHistory {
        return chestHistoryRepository.findById(chestHistoryId)
            .orElseThrow { IllegalArgumentException("Invalid chest history ID") }
    }

    private fun checkExistingBonus(chestHistory: ChestHistory) {
        val existingBonuses = bonusRepository.findByChestHistory(chestHistory)
        if (existingBonuses.isNotEmpty()) {
            throw IllegalArgumentException("Bonus already exists for the given chest history.")
        }
    }

    private fun getAward(awardId: Long): Award {
        return awardRepository.findById(awardId)
            .orElseThrow { IllegalArgumentException("Invalid award ID") }
    }

    private fun getUserEditions(userId: Long): Set<Edition> {
        val userGroups = groupsRepository.findByUsers_UserId(userId)
        return userGroups.map { it.edition }.toSet()
    }

    private fun getAwardEditions(award: Award): Set<Edition> {
        return awardEditionRepository.findByAward(award).map { it.edition }.toSet()
    }

    private fun checkMaxUsages(user: Users, award: Award) {
        if (award.maxUsages != -1) {
            val bonusCount = bonusRepository.countByAwardAndPoints_Student(award, user)
            if (bonusCount >= award.maxUsages) {
                throw IllegalArgumentException("Cannot apply more than ${award.maxUsages} bonuses for this award.")
            }
        }
    }

    private fun createAdditivePoints(chestHistory: ChestHistory, award: Award): Points {
        if (chestHistory.subcategory.edition.editionId !in getAwardEditions(award).map { it.editionId }) {
            throw IllegalArgumentException("Subcategory's edition does not match the award's edition.")
        }

        return Points(
            student = chestHistory.user,
            teacher = chestHistory.teacher,
            value = award.awardValue.toLong(),
            subcategory = chestHistory.subcategory,
            label = ""
        )
    }

    private fun createAdditiveNextPoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = getPointsInAwardCategory(chestHistory, edition, award)

        val lastSubcategory = pointsInAwardCategory.maxByOrNull { it.subcategory.subcategoryId }?.subcategory
        val nextSubcategory = if (lastSubcategory != null) {
            subcategoriesRepository.findFirstByCategoryAndSubcategoryIdGreaterThanOrderBySubcategoryIdAsc(
                lastSubcategory.category, lastSubcategory.subcategoryId
            ).orElseGet {
                subcategoriesRepository.findFirstByCategoryOrderBySubcategoryIdAsc(lastSubcategory.category)
                    .orElseThrow { IllegalArgumentException("No subcategory found in the specified category.") }
            }
        } else {
            subcategoriesRepository.findFirstByCategoryOrderBySubcategoryIdAsc(chestHistory.subcategory.category)
                .orElseThrow { IllegalArgumentException("No subcategory found in the specified category.") }
        }

        return Points(
            student = chestHistory.user,
            teacher = chestHistory.teacher,
            value = award.awardValue.toLong(),
            subcategory = nextSubcategory,
            label = ""
        )
    }

    private fun updateAdditivePrevPoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = getPointsInAwardCategory(chestHistory, edition, award)
            .filter { point -> bonusRepository.findByPoints(point).isEmpty() } // exclude points connected to bonuses

        val lastPoints = pointsInAwardCategory.maxByOrNull { it.subcategory.subcategoryId }

        return if (lastPoints != null) {
            lastPoints.value += award.awardValue.toLong()
            pointsRepository.save(lastPoints)
        } else {
            // No points found, create a new entry with the first subcategory of the given category in the given edition
            val firstSubcategory = subcategoriesRepository.findFirstByCategoryAndEditionOrderBySubcategoryIdAsc(chestHistory.subcategory.category, edition)
                .orElseThrow { IllegalArgumentException("No subcategory found in the specified category and edition.") }

            Points(
                student = chestHistory.user,
                teacher = chestHistory.teacher,
                value = award.awardValue.toLong(),
                subcategory = firstSubcategory,
                label = ""
            ).also { pointsRepository.save(it) }
        }
    }
    private fun createMultiplicativePoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = getPointsInAwardCategory(chestHistory, edition, award)

        val totalPointsValue = pointsInAwardCategory.sumOf { it.value }

        return Points(
            student = chestHistory.user,
            teacher = chestHistory.teacher,
            value = (totalPointsValue * award.awardValue).toLong(),
            subcategory = chestHistory.subcategory,
            label = ""
        )
    }

    private fun getPointsInAwardCategory(chestHistory: ChestHistory, edition: Edition, award: Award): List<Points> {
        val allPointsInEdition = pointsRepository.findAllByStudentAndSubcategory_Edition(chestHistory.user, edition)

        return allPointsInEdition.filter {
            it.subcategory.category == award.category &&
                    it.subcategory.edition == edition
        }.filter { point ->
            bonusRepository.findByPoints(point).isEmpty() // discard points connected to bonuses
        }
    }

    private fun createBonusEntry(savedPoints: Points, award: Award, chestHistory: ChestHistory): Bonuses {
        return Bonuses(
            points = savedPoints,
            award = award,
            chestHistory = chestHistory,
            label = "Generated Bonus"
        )
    }
}
data class createBonusPayload(
    val bonus: Bonuses,
    val points: Points
)