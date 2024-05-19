package backend.groups

import backend.users.Users
import jakarta.persistence.*

@Entity
class Groups (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val groupsId: Long = 0,

    @Column(name = "groupName")
    var groupName: String,

    @Column(name = "groupYear")
    var groupYear: Int,

    @ManyToMany(mappedBy = "groups")
    val users: Set<Users> = HashSet()

){
    constructor(): this(
        groupName = "",
        groupYear = 1
    )
}