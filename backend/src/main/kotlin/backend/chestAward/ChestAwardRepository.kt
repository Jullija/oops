package backend.chestAward

import backend.chestAward.ChestAward
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestAwardRepository : JpaRepository<ChestAward, Long> {
}