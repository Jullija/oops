package backend.repository

import backend.entity.Bonuses
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BonusesRepository : JpaRepository<Bonuses, Long>{
}