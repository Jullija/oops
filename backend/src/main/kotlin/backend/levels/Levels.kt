package backend.levels

import jakarta.persistence.*

@Entity
@Table(name = "levels")
class Levels(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "levelId")
    val levelId: Long = 0,

    @Column(name = "name", nullable = false)
    var name: String,

    @Column(name = "treshold", nullable = false)
    var threshold: Double,

    @Lob
    @Column(name = "avatar", nullable = true)
    var avatar: ByteArray? = null //image?
) {

    protected constructor() : this(
        name = "",
        threshold = 0.0
    )


    //TODO: how to pass avatar
    constructor(name: String, threshold: Double):this(
        name = name,
        threshold = threshold,
        avatar = null
    )
}
