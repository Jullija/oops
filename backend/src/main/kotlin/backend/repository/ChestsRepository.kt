package backend.repository

import backend.entity.Chests
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestsRepository : JpaRepository<Chests, Long> {
}