package backend.chestAward

import backend.award.Award
import backend.chests.Chests
import jakarta.persistence.*

@Entity
@Table(name = "chest_award")
class ChestAward(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chest_award_id")
    val chestAwardId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "award_id", referencedColumnName = "award_id")
    var award: Award,

    @ManyToOne
    @JoinColumn(name = "chest_id", referencedColumnName = "chest_id")
    var chest: Chests,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,
) {
    constructor() : this(
        award = Award(),
        chest = Chests(),
        label = ""
    )
}
