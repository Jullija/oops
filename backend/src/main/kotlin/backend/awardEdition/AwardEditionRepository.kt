package backend.awardEdition

import backend.award.Award
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface AwardEditionRepository : JpaRepository<AwardEdition, Long> {
    fun findByAward(award: Award): List<AwardEdition>

}
