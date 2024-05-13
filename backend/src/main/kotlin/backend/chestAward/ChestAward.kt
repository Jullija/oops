package backend.chestAward

import backend.chests.Chests
import jakarta.persistence.*

@Entity
@Table(name = "ChestAward")
class ChestAward (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "awardId")
    val awardId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "chestId", referencedColumnName = "chestId")
    var chestId: Chests,

    @Column(name = "name", nullable = false)
    var name: String,

    @Column(name = "bonus", nullable = false)
    var bonus: Long
){
    constructor() : this(
        chestId= Chests(),
        name = "",
        bonus = 0
    )
}
