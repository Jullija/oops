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
import backend.groups.GroupsRepository
import backend.subcategories.SubcategoriesRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import kotlin.math.min

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

    @DgsMutation
    @Transactional
    fun addBonusMutation(@InputArgument chestHistoryId: Long, @InputArgument awardId: Long): AddBonusReturnType {
        val chestHistory = chestHistoryRepository.findById(chestHistoryId)
            .orElseThrow { IllegalArgumentException("Invalid chest history ID") }


        if (chestHistory.hasExistingBonus(bonusRepository)) {
            throw IllegalArgumentException("Bonus already exists for the given chest history.")
        }

        val award = awardRepository.findById(awardId)
            .orElseThrow { IllegalArgumentException("Invalid award ID") }

        if (chestHistory.user.getAwardUsageCount(award, bonusRepository) >= award.maxUsages) {
            throw IllegalArgumentException("Cannot apply more than ${award.maxUsages} bonuses for this award.")
        }

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
        val bonus = Bonuses(
            points = savedPoints,
            award = award,
            chestHistory = chestHistory,
            label = ""
        )
        val savedBonus = bonusRepository.save(bonus)

        return AddBonusReturnType(savedBonus, savedPoints)
    }

    private fun getUserEditions(userId: Long): Set<Edition> {
        val userGroups = groupsRepository.findByUsers_UserId(userId)
        return userGroups.map { it.edition }.toSet()
    }

    private fun getAwardEditions(award: Award): Set<Edition> {
        return awardEditionRepository.findByAward(award).map { it.edition }.toSet()
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
            label = "Points awarded for ${award.awardName}"
        )
    }

    private fun createAdditiveNextPoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = chestHistory.user.getPointsByEditionAndCategory(edition,
            award.category, pointsRepository).filter{
                point -> bonusRepository.findByPoints(point).isEmpty()  // discard points connected to bonuses
            }

        val lastSubcategory = pointsInAwardCategory.maxByOrNull { it.subcategory.ordinalNumber }?.subcategory
        val nextSubcategory = if (lastSubcategory != null) {
            subcategoriesRepository.findFirstByCategoryAndOrdinalNumberGreaterThanOrderByOrdinalNumberAsc(
                lastSubcategory.category, lastSubcategory.ordinalNumber
            ).orElseGet {
                subcategoriesRepository.findFirstByCategoryOrderByOrdinalNumberAsc(lastSubcategory.category)
                    .orElseThrow { IllegalArgumentException("No subcategory found in the specified category.") }
            }
        } else {
            subcategoriesRepository.findFirstByCategoryOrderByOrdinalNumberAsc(chestHistory.subcategory.category)
                .orElseThrow { IllegalArgumentException("No subcategory found in the specified category.") }
        }

        if (chestHistory.user.getPointsBySubcategory(nextSubcategory.subcategoryId, pointsRepository).isNotEmpty()) {
            throw IllegalArgumentException("User already has points in the next subcategory.")
        }

        return Points(
            student = chestHistory.user,
            teacher = chestHistory.teacher,
            value = award.awardValue.toLong(),
            subcategory = nextSubcategory,
            label = "Points awarded for ${award.awardName}"
        )
    }

    private fun updateAdditivePrevPoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = chestHistory.user.getPointsByEditionAndCategory(edition,
            award.category, pointsRepository).filter{
                point -> bonusRepository.findByPoints(point).isEmpty()  // discard points connected to bonuses
        }
        val lastPoints = pointsInAwardCategory.maxByOrNull { it.subcategory.ordinalNumber }

        return if (lastPoints != null) {
            lastPoints.value = min((lastPoints.value + award.awardValue).toLong(), lastPoints.subcategory.maxPoints.toLong())
            lastPoints.label = "Points awarded for ${award.awardName}"
            pointsRepository.save(lastPoints)
        } else {
            throw IllegalArgumentException("No previous points found in the specified category.")
        }
    }

    private fun createMultiplicativePoints(chestHistory: ChestHistory, award: Award, edition: Edition): Points {
        val pointsInAwardCategory = chestHistory.user.getPointsByEditionAndCategory(edition,
            award.category, pointsRepository).filter{
                point -> bonusRepository.findByPoints(point).isEmpty()  // discard points connected to bonuses
        }
        val totalPointsValue = pointsInAwardCategory.sumOf { it.value }

        return Points(
            student = chestHistory.user,
            teacher = chestHistory.teacher,
            value = (totalPointsValue * award.awardValue).toLong(),
            subcategory = chestHistory.subcategory,
            label = "Points awarded for ${award.awardName}"
        )
    }
}

data class AddBonusReturnType(
    val bonus: Bonuses,
    val points: Points
)
