package backend.edition

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface EditionRepository : JpaRepository<Edition, Long> {
}
