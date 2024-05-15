package backend.levels

import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.io.InputStream

@Service
class LevelsService(
    private val entityManager: EntityManager
) {
    @Transactional
    fun createLevel(name: String, threshold: Double, avatar: String): Levels {
        val level = Levels(name = name, threshold = threshold, avatar = avatar)
        entityManager.persist(level)
        return level
    }

    @Transactional
    fun updateLevel(levelId: Long, name: String, threshold: Double, avatar: String): Levels? {
        val level = entityManager.find(Levels::class.java, levelId)
        if (level != null) {
            level.name = name
            level.threshold = threshold
            level.avatar = avatar
            entityManager.merge(level)
        }
        return level
    }

    @Transactional
    fun findLevelById(levelId: Long): Levels? {
        return entityManager.find(Levels::class.java, levelId)
    }

    @Transactional
    fun deleteLevel(levelId: Long): Boolean {
        val level = entityManager.find(Levels::class.java, levelId)
        if (level != null) {
            entityManager.remove(level)
            return true
        }
        return false
    }
}