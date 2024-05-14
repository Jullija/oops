package backend.bonuses
import backend.chestAward.ChestAward
import backend.chestHistory.ChestHistory
import backend.points.Points
import backend.subcategories.Subcategories
import jakarta.persistence.*


@Entity
class Bonuses (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val bonusId: Long = 0,

    @OneToOne
    @JoinColumn(name = "pointsId", referencedColumnName = "pointsId")
    var pointsId: Points,

    @ManyToOne
    @JoinColumn(name = "awardId", referencedColumnName = "awardId")
    var awardId: ChestAward,

    @ManyToOne
    @JoinColumn(name = "subcategory")
    var subcategory: Subcategories
){
    constructor():this(
        pointsId = Points(),
        awardId = ChestAward(),
        subcategory = Subcategories()
    )
}