package backend.award

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AwardRepository : JpaRepository<Award, Long> {
}
