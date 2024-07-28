package backend.users

import UsersRolesConverter
import backend.award.Award
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.edition.Edition
import backend.files.FileEntity
import backend.groups.Groups
import backend.points.Points
import backend.points.PointsRepository
import jakarta.persistence.*
import org.hibernate.annotations.JdbcTypeCode
import org.hibernate.type.SqlTypes

@Entity
@Table(name = "users", uniqueConstraints = [UniqueConstraint(columnNames = ["index_number"])])
class Users(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    val userId: Long = 0,

    @Column(name = "index_number", nullable = false, unique = true)
    var indexNumber: Int,

    @Column(name = "nick", nullable = false)
    var nick: String,

    @Column(name = "first_name", nullable = false)
    var firstName:  String,

    @Column(name = "second_name", nullable = false)
    var secondName: String,

    @Column(name = "role", nullable = false)
    @Convert(converter = UsersRolesConverter::class)
    var role: UsersRoles,

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_groups",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "group_id")]
    )
    val groups: Set<Groups> = HashSet(),

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_file_id")
    var imageFile: FileEntity? = null

) {
    constructor() : this(
        indexNumber = 0,
        nick = "",
        firstName = "",
        secondName = "",
        role = UsersRoles.STUDENT,
        groups = HashSet(),
        label = ""
    )
    fun getAwardUsageCount(award: Award, bonusRepository: BonusesRepository): Long {
        return bonusRepository.countByAwardAndPoints_Student(award, this)
    }

    fun getPointsByEditionAndCategory(
        edition: Edition,
        category: Categories,
        pointsRepository: PointsRepository,
    ): List<Points> {
        val allStudentPointsInEdition = pointsRepository.findAllByStudentAndSubcategory_Edition(this, edition)

        return allStudentPointsInEdition.filter {
            it.subcategory.category == category && it.subcategory.edition == edition
        }
    }

    fun getPointsBySubcategory(subcategoryId: Long, pointsRepository: PointsRepository): List<Points> {
        return pointsRepository.findAllByStudentAndSubcategory_SubcategoryId(this, subcategoryId)
    }
}
