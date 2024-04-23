package backend.entity

import jakarta.persistence.*


@Entity
@Table(name = "points")
class Points (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val pointsId: Long = 0,

    @ManyToOne
    @JoinColumn(name="userId", referencedColumnName = "userId")
    var userId: Users,

    @Column(nullable = false)
    var fromWho: String,

    @Column(nullable = false)
    var howMany: Long,

    @ManyToOne
    @JoinColumn(name="subcategoyId", referencedColumnName = "subcategoryId")
    var subcategory: Subcategories,
){
    constructor() : this(
        userId = Users(),
        fromWho = "",
        howMany = 0,
        subcategory = Subcategories()

    )

}