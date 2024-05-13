package backend.chests

import backend.chests.Chests
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestsRepository : JpaRepository<Chests, Long> {
}