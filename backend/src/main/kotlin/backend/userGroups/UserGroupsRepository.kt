package backend.userGroups

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserGroupsRepository : JpaRepository<UserGroups, Long> {
}
