package backend.chestAward

import backend.chests.Chests
import jakarta.persistence.*

@Entity
@Table(name = "chest_award")
class ChestAward(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "award_id")
    val awardId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "chest_id", referencedColumnName = "chest_id")
    var chestId: Chests,

    @Column(name = "name", nullable = false)
    var name: String,

    @Column(name = "bonus", nullable = false)
    var bonus: Long
) {
    constructor() : this(
        chestId = Chests(),
        name = "",
        bonus = 0
    )
}
