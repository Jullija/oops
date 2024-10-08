package backend.userGroups

import backend.groups.Groups
import backend.users.Users
import jakarta.persistence.*
import java.io.Serializable

@Embeddable
data class UserGroupId(
    @Column(name = "user_id", nullable = false)
    val userId: Long = 0,

    @Column(name = "group_id", nullable = false)
    val groupId: Long = 0
) : Serializable

@Entity
@Table(name = "user_groups")
class UserGroups(
    @EmbeddedId
    val userGroupsId: UserGroupId = UserGroupId(),

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    var user: Users,

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("groupId")
    @JoinColumn(name = "group_id", referencedColumnName = "groups_id", nullable = false)
    var group: Groups
) {
    constructor() : this(
        userGroupsId = UserGroupId(),
        user = Users(),
        group = Groups()
    )
}