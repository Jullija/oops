package backend.chests

import jakarta.persistence.*

@Entity
@Table(name = "chests")
class Chests(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chest_id")
    val chestId: Long = 0,

    @Column(name = "type", nullable = false)
    var type: String
) {
    constructor() : this(
        type = ""
    )
}
