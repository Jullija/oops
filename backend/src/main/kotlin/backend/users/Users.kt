package backend.users

import backend.groups.Groups
import jakarta.persistence.*

@Entity
@Table(name = "users")
class Users(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    val userId: Long = 0,

    @Column(name = "nick", nullable = false)
    var nick: String,

    @Column(name = "role", nullable = false)
    @Enumerated(EnumType.STRING)
    var role: UsersRoles,

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_groups",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "group_id")]
    )
    val groups: Set<Groups> = HashSet()
) {
    constructor() : this(
        nick = "",
        role = UsersRoles.STUDENT,
        groups = HashSet()
    )
}
