package backend.groups

import backend.edition.Edition
import backend.users.Users
import backend.users.WeekdayEnum
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.sql.Time

@Repository
interface GroupsRepository : JpaRepository<Groups, Long> {
    fun findByGroupNameAndEdition(groupName: String, edition: Edition): Groups
    fun findByEdition(edition: Edition): List<Groups>
    fun findByUserGroups_User_UserId(userId: Long): List<Groups>
    fun existsByGroupNameAndEdition(groupName: String, edition: Edition): Boolean
    fun existsByTeacherAndWeekdayAndStartTimeAndEndTimeAndEdition(teacher: Users, weekday: WeekdayEnum, startTime: Time, endTime: Time, edition: Edition): Boolean
}
