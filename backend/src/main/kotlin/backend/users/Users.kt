package backend.users
import backend.groups.Groups
import jakarta.persistence.*


@Entity
@Table(name = "users")
class Users (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    val userId: Long = 0,

    @Column(name = "nick", nullable = false)
    var nick: String,

    @Column(name = "role", nullable = false)
    var role: UsersRoles,

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "userGroups",
        joinColumns = [JoinColumn(name = "userId")],
        inverseJoinColumns = [JoinColumn(name = "groupId")]
    )
    val groups: Set<Groups> = HashSet()
){
    constructor() : this(
        nick = "",
        role = UsersRoles.STUDENT,
        groups = HashSet()
    )
}