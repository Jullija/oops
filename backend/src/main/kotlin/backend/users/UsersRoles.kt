package backend.users

import java.util.*

enum class UsersRoles {
    STUDENT,
    TEACHER,
    COORDINATOR;

    override fun toString(): String {
        return name.lowercase(Locale.getDefault())
    }
}
