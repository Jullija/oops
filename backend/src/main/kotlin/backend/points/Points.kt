package backend.points

import backend.subcategories.Subcategories
import backend.users.Users
import backend.utils.TimestampModel
import jakarta.persistence.*

@Entity
@Table(name = "points")
class Points(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "points_id")
    val pointsId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    var userId: Users,

    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "user_id")
    var fromWho: Users,

    @Column(name = "how_many", nullable = false)
    var howMany: Long,

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "subcategory_id")
    var subcategory: Subcategories,


    @Column(name = "label", nullable = false, length = 256)
    var label: String
) : TimestampModel(){
    constructor() : this(
        userId = Users(),
        fromWho = Users(),
        howMany = 0,
        subcategory = Subcategories(),
        label = ""
    )
}


data class PointsInput(
    val studentId: Long,
    val teacherId: Long,
    val howMany: Long,
    val subcategoryId: Long
)