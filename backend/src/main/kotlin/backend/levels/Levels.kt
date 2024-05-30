package backend.levels

import backend.edition.Edition
import jakarta.persistence.*

@Entity
@Table(name = "levels")
class Levels(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "level_id")
    val levelId: Long = 0,

    @Column(name = "name", nullable = false)
    var levelName: String,

    @Column(name = "minimum_points", nullable = false)
    var minimumPoints: Double,

    @Column(name = "maximum_points", nullable = false)
    var maximumPoints: Double,

    @Column(name = "grade", nullable = false)
    var grade: Double,

    @Column(name = "avatar", nullable = true)
    var avatar: String = "", // image URL or path

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition
) {
    protected constructor() : this(
        levelName = "",
        minimumPoints = 0.0,
        maximumPoints = 0.0,
        grade = 2.0,
        label = "",
        edition = Edition()
    )

    constructor(name: String, minimumPoints: Double, maximumPoints: Double, grade: Double) : this(
        levelName = name,
        minimumPoints = minimumPoints,
        maximumPoints = maximumPoints,
        grade = grade,
        avatar = "",
        label = "",
        edition = Edition()
    )
}
