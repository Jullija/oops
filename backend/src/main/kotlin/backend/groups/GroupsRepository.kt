package backend.groups

import backend.edition.Edition
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GroupsRepository : JpaRepository<Groups, Long> {
    fun findByGroupNameAndEdition(groupName: String, edition: Edition): Groups
    fun findByEdition(edition: Edition): List<Groups>
    fun findByUsers_UserId(userId: Long): List<Groups>

}