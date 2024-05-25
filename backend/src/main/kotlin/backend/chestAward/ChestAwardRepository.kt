package backend.chestAward

import backend.chests.Chests
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestAwardRepository : JpaRepository<ChestAward, Long> {

}