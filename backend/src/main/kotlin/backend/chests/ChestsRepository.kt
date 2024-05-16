package backend.chests

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestsRepository : JpaRepository<Chests, Long> {
    fun findByType(type:String) : Chests
}