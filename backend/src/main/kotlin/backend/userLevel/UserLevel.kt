package backend.userLevel

import backend.edition.Edition
import backend.levels.Levels
import backend.users.Users
import jakarta.persistence.*

@Entity
@Table(name = "user_level")
class UserLevel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_level_id")
    val userLevelId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    var user: Users,

    @ManyToOne
    @JoinColumn(name = "edition_id", referencedColumnName = "edition_id")
    var edition: Edition,

    @ManyToOne
    @JoinColumn(name = "level_id", referencedColumnName = "level_id")
    var level: Levels,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,
) {
    constructor() : this(
        user = Users(),
        edition = Edition(),
        level = Levels(),
        label = ""
    )
}
