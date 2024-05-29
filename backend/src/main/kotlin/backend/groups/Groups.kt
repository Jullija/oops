package backend.groups

import backend.edition.Edition
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

    @Column(name = "label", nullable = true)
    var label: String = "",

    @ManyToMany(mappedBy = "groups")
    val users: Set<Users> = HashSet(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition
) {
    constructor() : this(
        groupName = "",
        label = "",
        edition = Edition()
    )
}
