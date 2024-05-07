package backend.service

import backend.entity.Users
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class UserService(
    private val entityManager: EntityManager
) {
    @Transactional
    fun createUser(nick: String, role: String): Users {
        val user = Users(nick = nick, role = role)
        entityManager.persist(user)
        return user
    }

    @Transactional
    fun updateUser(userId: Long, newNick: String, newRole: String): Users? {
        val user = entityManager.find(Users::class.java, userId)
        if (user != null) {
            user.nick = newNick
            user.role = newRole
            entityManager.merge(user)
        }
        return user
    }

    @Transactional
    fun findUserById(userId: Long): Users? {
        return entityManager.find(Users::class.java, userId)
    }

    @Transactional
    fun deleteUser(userId: Long): Boolean {
        val user = entityManager.find(Users::class.java, userId)
        if (user != null) {
            entityManager.remove(user)
            return true
        }
        return false
    }
}
