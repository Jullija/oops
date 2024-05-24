package backend.bonuses

import backend.chestAward.ChestAward
import backend.points.Points
import backend.points.PointsInput
import backend.subcategories.Subcategories
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
    var award: ChestAward,

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "subcategory_id")
    var subcategory: Subcategories
) {
    constructor() : this(
        points = Points(),
        award = ChestAward(),
        subcategory = Subcategories()
    )
}
