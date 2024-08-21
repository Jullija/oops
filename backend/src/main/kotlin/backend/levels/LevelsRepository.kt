package backend.levels

import backend.edition.Edition
import backend.levels.Levels
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LevelsRepository : JpaRepository<Levels, Long> {
    fun findByEdition(edition: Edition): List<Levels>
    fun findByImageFile_FileId(fileId: Long): List<Levels>
}
