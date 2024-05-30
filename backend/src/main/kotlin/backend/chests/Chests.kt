package backend.chests

import backend.edition.Edition
import jakarta.persistence.*

@Entity
@Table(name = "chests")
class Chests(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chest_id")
    val chestId: Long = 0,

    @Column(name = "type", nullable = false)
    var chestType: String,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition
) {
    constructor() : this(
        chestType = "",
        label = "",
        edition = Edition()
    )
}
