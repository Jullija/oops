package backend.points

import backend.subcategories.Subcategories
import backend.users.Users
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointsRepository : JpaRepository<Points, Long> {
    fun findByUserIdAndFromWhoAndSubcategory(userId: Users, fromWho: Users, subcategory: Subcategories) : List<Points>
}