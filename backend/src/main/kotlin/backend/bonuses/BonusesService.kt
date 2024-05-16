package backend.bonuses

import backend.points.Points
import backend.chestAward.ChestAward
import backend.chestHistory.ChestHistory
import backend.subcategories.Subcategories
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class BonusService(
    private val bonusesRepository: BonusesRepository
) {
//    @Transactional
//    fun createBonus(pointsId: Points, awardId: ChestAward, forWhat: Subcategories): Bonuses {
//        val bonus = Bonuses(pointsId = pointsId, awardId = awardId, subcategory = forWhat)
//        entityManager.persist(bonus)
//        return bonus
//    }
//
//    @Transactional
//    fun updateBonus(bonusId: Long, pointsId: Points, awardId: ChestAward, forWhat: Subcategories): Bonuses? {
//        val bonus = entityManager.find(Bonuses::class.java, bonusId) ?: return null
//        bonus.pointsId = pointsId
//        bonus.awardId = awardId
//        bonus.subcategory = forWhat
//        return entityManager.merge(bonus)
//    }
//
//    @Transactional
//    fun findBonusById(bonusId: Long): Bonuses? {
//        return entityManager.find(Bonuses::class.java, bonusId)
//    }
//
//    @Transactional
//    fun deleteBonus(bonusId: Long): Boolean {
//        val bonus = entityManager.find(Bonuses::class.java, bonusId) ?: return false
//        entityManager.remove(bonus)
//        return true
//    }
}
