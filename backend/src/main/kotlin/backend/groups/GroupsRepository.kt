package backend.groups

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GroupsRepository : JpaRepository<Groups, Long> {
    fun findByGroupNameAndGroupYear(groupName: String, groupYear: Int) : Groups
}