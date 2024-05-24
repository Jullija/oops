package backend.chestAward

import backend.chests.Chests
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class ChestAwardService(
    private val chestAwardConfiguration: ChestAwardConfiguration
) {
//    @Transactional
//    fun createChestAward(chestId: Chests, name: String, bonus: Long): ChestAward {
//        val chestAward = ChestAward(chestId = chestId, name = name, bonus = bonus)
//        entityManager.persist(chestAward)
//        return chestAward
//    }
//
//    @Transactional
//    fun updateChestAward(awardId: Long, chestId: Chests, name: String, bonus: Long): ChestAward? {
//        val chestAward = entityManager.find(ChestAward::class.java, awardId) ?: return null
//        chestAward.chestId = chestId
//        chestAward.name = name
//        chestAward.bonus = bonus
//        return entityManager.merge(chestAward)
//    }
//
//    @Transactional
//    fun findChestAwardById(awardId: Long): ChestAward? {
//        return entityManager.find(ChestAward::class.java, awardId)
//    }
//
//    @Transactional
//    fun deleteChestAward(awardId: Long): Boolean {
//        val chestAward = entityManager.find(ChestAward::class.java, awardId) ?: return false
//        entityManager.remove(chestAward)
//        return true
//    }
}
