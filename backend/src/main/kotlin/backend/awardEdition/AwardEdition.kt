package backend.awardEdition

import backend.award.Award
import backend.edition.Edition
import jakarta.persistence.*

@Entity
@Table(name = "award_edition")
class AwardEdition (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "award_edition_id", nullable = false)
    val awardEditionId: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "award_id", nullable = false)
    var award: Award,

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition,

    @Column(name = "label", nullable = false, length = 256)
    var label: String
) {
    constructor() : this(
        award = Award(), // Assuming Award has a default constructor
        edition = Edition(), // Assuming Edition has a default constructor
        label = ""
    )
}
