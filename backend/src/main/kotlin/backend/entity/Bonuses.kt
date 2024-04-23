package backend.entity
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
    val forWhat: ChestHistory
){
    constructor():this(
        pointsId = Points(),
        awardId = ChestAward(),
        forWhat = ChestHistory()
    )
}