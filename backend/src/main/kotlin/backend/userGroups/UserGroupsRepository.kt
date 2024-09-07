package backend.userGroups

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import backend.users.Users
import backend.groups.Groups

@Repository
interface UserGroupsRepository : JpaRepository<UserGroups, Long> {
    fun existsByUserAndGroup(user: Users, group: Groups): Boolean

    fun deleteByUserAndGroup(user: Users, group: Groups)
}
