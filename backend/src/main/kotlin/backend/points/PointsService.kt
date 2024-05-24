package backend.points

import backend.users.Users
import backend.subcategories.Subcategories
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class PointsService(
    private val pointsRepository: PointsRepository
) {
//    @Transactional
//    fun createPoints(userId: Users, fromWho: Users, howMany: Long, subcategory: Subcategories): Points {
//        val points = Points(userId = userId, fromWho = fromWho, howMany = howMany, subcategory = subcategory)
//        entityManager.persist(points)
//        return points
//    }
//
//    @Transactional
//    fun updatePoints(pointsId: Long, userId: Users, fromWho: Users, howMany: Long, subcategory: Subcategories): Points? {
//        val points = entityManager.find(Points::class.java, pointsId)
//        if (points != null) {
//            points.userId = userId
//            points.fromWho = fromWho
//            points.howMany = howMany
//            points.subcategory = subcategory
//            entityManager.merge(points)
//        }
//        return points
//    }
//
//    @Transactional
//    fun findPointsById(pointsId: Long): Points? {
//        return entityManager.find(Points::class.java, pointsId)
//    }
//
//    @Transactional
//    fun deletePoints(pointsId: Long): Boolean {
//        val points = entityManager.find(Points::class.java, pointsId)
//        if (points != null) {
//            entityManager.remove(points)
//            return true
//        }
//        return false
//    }
}
