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
    var user: Users,

    @ManyToOne
    @JoinColumn(name = "chestId", referencedColumnName = "chestId")
    var chest: Chests,


    @ManyToOne
    @JoinColumn(name = "subcategoryId", referencedColumnName = "subcategoryId")
    var subcategory: Subcategories,
){
    constructor() : this(
        user = Users(),
        chest = Chests(),
        subcategory = Subcategories()
    )
}