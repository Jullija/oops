package backend.chestHistory

import backend.users.Users
import backend.chests.Chests
import backend.subcategories.Subcategories
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class ChestHistoryService(
    private val chestHistoryRepository: ChestHistoryRepository
) {
//    @Transactional
//    fun createChestHistory(userId: Users, chestId: Chests, subcategoryId: Subcategories): ChestHistory {
//        val chestHistory = ChestHistory(userId = userId, chestId = chestId, subcategoryId = subcategoryId)
//        entityManager.persist(chestHistory)
//        return chestHistory
//    }
//
//    @Transactional
//    fun updateChestHistory(chestHistoryId: Long, userId: Users, chestId: Chests, subcategoryId: Subcategories): ChestHistory? {
//        val chestHistory = entityManager.find(ChestHistory::class.java, chestHistoryId) ?: return null
//        chestHistory.userId = userId
//        chestHistory.chestId = chestId
//        chestHistory.subcategoryId = subcategoryId
//        return entityManager.merge(chestHistory)
//    }
//
//    @Transactional
//    fun findChestHistoryById(chestHistoryId: Long): ChestHistory? {
//        return entityManager.find(ChestHistory::class.java, chestHistoryId)
//    }
//
//    @Transactional
//    fun deleteChestHistory(chestHistoryId: Long): Boolean {
//        val chestHistory = entityManager.find(ChestHistory::class.java, chestHistoryId) ?: return false
//        entityManager.remove(chestHistory)
//        return true
//    }
}
