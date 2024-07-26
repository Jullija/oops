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
    var student: Users,

    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "user_id")
    var teacher: Users,

    @Column(name = "value", nullable = false)
    var value: Float,

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "subcategory_id")
    var subcategory: Subcategories,


    @Column(name = "label", nullable = false, length = 256)
    var label: String
) : TimestampModel(){
    constructor() : this(
        student = Users(),
        teacher = Users(),
        value = 0f,
        subcategory = Subcategories(),
        label = ""
    )
}


data class PointsInput(
    val student: Long,
    val teacher: Long,
    val value: Float,
    val subcategory: Long
)
