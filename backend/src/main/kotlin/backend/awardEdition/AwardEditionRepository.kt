package backend.awardEdition

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AwardEditionRepository : JpaRepository<AwardEdition, Long> {
    // You can add custom query methods here if needed
}
