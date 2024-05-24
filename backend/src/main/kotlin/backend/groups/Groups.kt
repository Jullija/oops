package backend.groups

import backend.users.Users
import jakarta.persistence.*

@Entity
@Table(name = "groups")
class Groups(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "groups_id")
    val groupsId: Long = 0,

    @Column(name = "group_name", nullable = false)
        var groupName: String,

    @Column(name = "group_year", nullable = false)
    var groupYear: Int,

    @Column(name = "label", nullable=true)
    var label: String = "",

    @ManyToMany(mappedBy = "groups")
    val users: Set<Users> = HashSet()
) {
    constructor() : this(
        groupName = "",
        groupYear = 1,
        label = ""
    )
}
