package backend.repository

import backend.entity.Points
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointsRepository : JpaRepository<Points, Long> {
}