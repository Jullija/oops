package backend.chestHistory

import backend.chests.Chests
import backend.subcategories.Subcategories
import backend.users.Users
import jakarta.persistence.*

@Entity
@Table(name = "chest_history")
class ChestHistory(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chest_history_id")
    val chestHistoryId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    var user: Users,

    @ManyToOne
    @JoinColumn(name = "chest_id", referencedColumnName = "chest_id")
    var chest: Chests,

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "subcategory_id")
    var subcategory: Subcategories
) {
    constructor() : this(
        user = Users(),
        chest = Chests(),
        subcategory = Subcategories()
    )
}
