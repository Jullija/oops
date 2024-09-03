package backend.weekdays

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface WeekdaysRepository : JpaRepository<Weekdays, Long> {
}
