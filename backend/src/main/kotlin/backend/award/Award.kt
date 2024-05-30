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

        @Column(name = "max_usages", nullable = false)
        var maxUsages: Int,

        @OneToMany(mappedBy = "award", fetch = FetchType.LAZY, cascade = [CascadeType.ALL], orphanRemoval = true)
        val awardEditions: Set<AwardEdition> = HashSet(),

        @Column(name = "label", nullable = false, length = 256)
        var label: String
) {
        constructor() : this(
                awardName = "",
                awardType = AwardType.ADDITIVE,
                maxUsages = 1,
                awardEditions = HashSet(),
                label = ""
        )
}
