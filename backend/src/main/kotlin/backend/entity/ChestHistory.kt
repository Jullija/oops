package backend.entity
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
    var forWhat: Subcategories,
){
    constructor() : this(
        userId = Users(),
        chestId = Chests(),
        forWhat = Subcategories()
    )
}