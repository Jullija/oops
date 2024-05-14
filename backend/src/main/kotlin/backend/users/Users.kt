package backend.users
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
){
    constructor() : this(
        nick = "",
        role = UsersRoles.STUDENT,
    )
}