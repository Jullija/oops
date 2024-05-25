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

    @Column(name = "index_number", nullable = false)
    var indexNumber: Int,

    @Column(name = "nick", nullable = false)
    var nick: String,

    @Column(name = "first_name", nullable = false)
    var firstName:  String,

    @Column(name = "second_name", nullable = false)
    var secondName: String,

    @Column(name = "role", nullable = false)
    @Enumerated(EnumType.STRING)
    var role: UsersRoles,

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_groups",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "group_id")]
    )
    val groups: Set<Groups> = HashSet(),

    @Column(name = "label", nullable = false, length = 256)
    var label: String


) {
    constructor() : this(
        indexNumber = 0,
        nick = "",
        firstName = "",
        secondName = "",
        role = UsersRoles.STUDENT,
        groups = HashSet(),
        label = ""
    )
}
