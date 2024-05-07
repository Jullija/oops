package backend.repository

import backend.entity.ChestHistory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestHistoryRepository : JpaRepository<ChestHistory, Long> {
}