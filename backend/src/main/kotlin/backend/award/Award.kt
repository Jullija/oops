package backend.award

import backend.awardEdition.AwardEdition
import jakarta.persistence.*

@Entity
@Table(name = "award")
class Award (
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "award_id", nullable = false)
        val awardId: Long = 0,

        @Column(name = "award_name", nullable = false)
        var awardName: String,

        @Enumerated(EnumType.STRING)
        @Column(name="award_type", nullable = false)
        var awardType: AwardType,

        @OneToMany(mappedBy = "award", fetch = FetchType.LAZY, cascade = [CascadeType.ALL], orphanRemoval = true)
        val awardEditions: Set<AwardEdition> = HashSet(),

        @Column(name = "label", nullable = false, length = 256)
        var label: String
) {
        constructor() : this(
                awardName = "",
                awardType = AwardType.ADDITIVE,
                awardEditions = HashSet(),
                label = ""
        )
}
