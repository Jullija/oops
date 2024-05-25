package backend.award

import jakarta.persistence.*

@Entity
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

        @Column(name = "label", nullable = false, length = 256)
        var label: String

){
    constructor():this(
            awardName = "",
            awardType = AwardType.ADDITIVE,
            label = ""
    )
}