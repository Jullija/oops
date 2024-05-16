package backend.chestHistory

import backend.chestAward.ChestAward
import backend.chestHistory.ChestHistory
import backend.chests.Chests
import backend.users.Users
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestHistoryRepository : JpaRepository<ChestHistory, Long> {
    fun findByUserAndChest(userId: Users, chestId: Chests) : List<ChestHistory>
}