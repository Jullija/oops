package backend.levels

import backend.levels.Levels
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LevelsRepository : JpaRepository<Levels, Long> {
}
