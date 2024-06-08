package backend.bonuses

import backend.award.Award
import backend.chestAward.ChestAward
import backend.chestHistory.ChestHistory
import backend.points.Points
import backend.points.PointsInput
import backend.subcategories.Subcategories
import backend.utils.TimestampModel
import jakarta.persistence.*

@Entity
@Table(name = "bonuses")
class Bonuses(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bonus_id")
    val bonusId: Long = 0,

    @OneToOne
    @JoinColumn(name = "points_id", referencedColumnName = "points_id")
    var points: Points,

    @ManyToOne
    @JoinColumn(name = "award_id", referencedColumnName = "award_id")
    var award: Award,


    @OneToOne
    @JoinColumn(name = "chest_history_id", referencedColumnName = "chest_history_id")
    var chestHistory: ChestHistory,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

) : TimestampModel(){
    constructor() : this(
        points = Points(),
        award = Award(),
        chestHistory = ChestHistory(),
        label = ""
    )
}
