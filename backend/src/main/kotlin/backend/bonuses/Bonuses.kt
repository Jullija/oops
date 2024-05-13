package backend.bonuses
import backend.chestAward.ChestAward
import backend.chestHistory.ChestHistory
import backend.points.Points
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
    @JoinColumn(name = "forWhat")
    var forWhat: ChestHistory
){
    constructor():this(
        pointsId = Points(),
        awardId = ChestAward(),
        forWhat = ChestHistory()
    )
}