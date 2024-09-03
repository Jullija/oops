package backend.bonuses

import backend.award.Award
import backend.award.AwardType
import backend.chestHistory.ChestHistory
import backend.points.Points
import backend.users.Users
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BonusesRepository : JpaRepository<Bonuses, Long> {
    fun findByChestHistory(chestHistory: ChestHistory): List<Bonuses>
    fun findByPoints(points: Points): List<Bonuses>
    fun countByAwardAndPoints_Student(award: Award, student: Users): Long

    fun findByAward_AwardTypeAndPoints_Student(awardType: AwardType, student: Users): List<Bonuses>

    fun findByChestHistory_User_UserIdIn(userId: List<Long>): List<Bonuses>

    fun findByChestHistory_User_UserId(userId: Long): List<Bonuses>

}
