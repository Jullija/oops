package backend.chestHistory
import backend.chests.Chests
import backend.subcategories.Subcategories
import backend.users.Users
import jakarta.persistence.*


@Entity
class ChestHistory (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val chestHistoryId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    var userId: Users,

    @ManyToOne
    @JoinColumn(name = "chestId", referencedColumnName = "chestId")
    var chestId: Chests,


    @ManyToOne
    @JoinColumn(name = "subcategoryId", referencedColumnName = "subcategoryId")
    var subcategoryId: Subcategories,
){
    constructor() : this(
        userId = Users(),
        chestId = Chests(),
        subcategoryId = Subcategories()
    )
}