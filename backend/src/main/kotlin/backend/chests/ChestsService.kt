package backend.chests

import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class ChestService(
    private val chestsRepository: ChestsRepository
) {
//    @Transactional
//    fun createChest(type: String): Chests {
//        val chest = Chests(type = type)
//        entityManager.persist(chest)
//        return chest
//    }
//
//    @Transactional
//    fun updateChest(chestId: Long, newType: String): Chests? {
//        val chest = entityManager.find(Chests::class.java, chestId)
//        if (chest != null) {
//            chest.type = newType
//            entityManager.merge(chest)
//        }
//        return chest
//    }
//
//    @Transactional
//    fun findChestById(chestId: Long): Chests? {
//        return entityManager.find(Chests::class.java, chestId)
//    }
//
//    @Transactional
//    fun deleteChest(chestId: Long): Boolean {
//        val chest = entityManager.find(Chests::class.java, chestId)
//        if (chest != null) {
//            entityManager.remove(chest)
//            return true
//        }
//        return false
//    }
}
