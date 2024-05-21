package backend.levels

import jakarta.persistence.*

@Entity
@Table(name = "levels")
class Levels(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "level_id")
    val levelId: Long = 0,

    @Column(name = "name", nullable = false)
    var name: String,

    @Column(name = "minimum_points", nullable = false)
    var minimumPoints: Double,

    @Column(name = "maximum_points", nullable = false)
    var maximumPoints: Double,

    @Column(name = "avatar", nullable = true)
    var avatar: String = "" // image URL or path
) {

    protected constructor() : this(
        name = "",
        minimumPoints = 0.0,
        maximumPoints = 0.0
    )

    constructor(name: String, minimumPoints: Double, maximumPoints: Double):this(
        name = name,
        minimumPoints = minimumPoints,
        maximumPoints = maximumPoints,
        avatar = ""
    )
}
