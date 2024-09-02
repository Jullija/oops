package backend.graphql

import backend.points.Points
import backend.points.PointsRepository
import backend.bonuses.BonusesRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.award.AwardType
import backend.users.UsersRoles
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class PointsDataFetcher {

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var bonusRepository: BonusesRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @DgsMutation
    @Transactional
    fun addPointsMutation(@InputArgument studentId: Long, @InputArgument teacherId: Long, value: Float,
                          @InputArgument subcategoryId: Long, @InputArgument checkDates: Boolean = true): Points {
        val student = usersRepository.findByUserId(studentId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }

        val teacher = usersRepository.findByUserId(teacherId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }

        val subcategory = subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Invalid subcategory ID") }


        if (checkDates){
            if (subcategory.edition.startDate.isAfter(java.time.LocalDate.now())){
                throw IllegalArgumentException("Subcategory edition has not started yet")
            }
            if (subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
                throw IllegalArgumentException("Subcategory edition has already ended")
            }
        }
        if (!subcategory.category.canAddPoints) {
            throw IllegalArgumentException("This subcategory's category does not allow adding points")
        }

        if (teacher.role != UsersRoles.TEACHER && teacher.role != UsersRoles.COORDINATOR) {
            throw IllegalArgumentException("Points can be added only by teacher or coordinator")
        }
        if (student.role != UsersRoles.STUDENT) {
            throw IllegalArgumentException("Points can be added only to student")
        }

        if (teacher.role == UsersRoles.TEACHER && student.userGroups.none { it.group.teacher == teacher }) {
            throw IllegalArgumentException("Teacher is not a teacher of student's group")
        }

        val studentEditions = student.userGroups.map { it.group.edition }.distinct()
        if (!studentEditions.contains(subcategory.edition)) {
            throw IllegalArgumentException("Student is not participating in subcategory edition")
        }
        val teacherEditions = teacher.userGroups.map { it.group.edition }.distinct()
        if (!teacherEditions.contains(subcategory.edition)) {
            throw IllegalArgumentException("Teacher is not participating in subcategory edition")
        }
        if (value < 0) {
            throw IllegalArgumentException("Value cannot be negative")
        }
        val studentPoints = student.getPointsBySubcategory(subcategoryId, pointsRepository)
        val studentPointsWithoutBonuses = studentPoints.filter { bonusRepository.findByPoints(it).isEmpty() }
        if (studentPointsWithoutBonuses.isNotEmpty()) {
            throw IllegalArgumentException("This student already has points in this subcategory")
        }
        val studentPointsSum = studentPoints.sumOf { it.value.toDouble() }.toFloat()
        if (studentPointsSum + value > subcategory.maxPoints) {
            throw IllegalArgumentException("Student cannot have more than ${subcategory.maxPoints} points in this subcategory")
        }

        val points = Points(
            student = student,
            teacher = teacher,
            updatedBy = teacher,
            value = value,
            subcategory = subcategory,
            label = ""
        )
        val savedPoints = pointsRepository.save(points)


        val bonuses = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.MULTIPLICATIVE, student).filter{
            bonus -> bonus.points.subcategory.edition == subcategory.edition
        }

        bonuses.forEach { bonus ->
            bonus.updateMultiplicativePoints(bonusRepository, pointsRepository)
        }

        return savedPoints
    }
}
