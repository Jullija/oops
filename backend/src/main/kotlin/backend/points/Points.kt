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
    var studentId: Users,

    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "user_id")
    var teacherId: Users,

    @Column(name = "value", nullable = false)
    var value: Long,

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "subcategory_id")
    var subcategoryId: Subcategories,


    @Column(name = "label", nullable = false, length = 256)
    var label: String
) : TimestampModel(){
    constructor() : this(
        studentId = Users(),
        teacherId = Users(),
        value = 0,
        subcategoryId = Subcategories(),
        label = ""
    )
}


data class PointsInput(
    val studentId: Long,
    val teacherId: Long,
    val value: Long,
    val subcategoryId: Long
)