package backend.pointHistory

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointsHistoryRepository : JpaRepository<PointsHistory, Long> {

}
