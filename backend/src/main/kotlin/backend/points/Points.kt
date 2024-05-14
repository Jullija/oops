package backend.points

import backend.subcategories.Subcategories
import backend.users.Users
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

    @ManyToOne
    @Column(nullable = false)
    var fromWho: Users,

    @Column(nullable = false)
    var howMany: Long,

    @ManyToOne
    @JoinColumn(name="subcategoyId", referencedColumnName = "subcategoryId")
    var subcategory: Subcategories,
){
    constructor() : this(
        userId = Users(),
        fromWho = Users(),
        howMany = 0,
        subcategory = Subcategories()

    )

}