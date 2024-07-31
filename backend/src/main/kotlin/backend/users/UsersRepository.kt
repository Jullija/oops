package backend.users

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UsersRepository : JpaRepository<Users, Long> {
    fun findByNick(nick:String) : Users
    fun findByUserId(userId: Long) : Optional<Users>
    fun findByUserGroups_Group_GroupsId(groupId: Long) : List<Users>
}
