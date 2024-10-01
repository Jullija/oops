package backend.chests

import backend.edition.Edition
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChestsRepository : JpaRepository<Chests, Long> {
    fun findByChestType(chestType:String) : Chests
    fun existsByChestTypeAndEditionAndActive(chestType:String, edition: Edition, active: Boolean) : Boolean
    fun existsByChestTypeAndEdition(chestType:String, edition: Edition) : Boolean
}
