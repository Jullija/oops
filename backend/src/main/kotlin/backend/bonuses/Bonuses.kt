package backend.bonuses

import backend.chestAward.ChestAward
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
    var points: Points,

    @ManyToOne
    @JoinColumn(name = "awardId", referencedColumnName = "awardId")
    var award: ChestAward,

    @ManyToOne
    @JoinColumn(name = "subcategoryId", referencedColumnName = "subcategoryId")
    var subcategory: Subcategories,
) {
    constructor(): this(
        points = Points(),
        award = ChestAward(),
        subcategory = Subcategories()
    )
}
