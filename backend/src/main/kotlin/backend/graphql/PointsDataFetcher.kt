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
import java.math.BigDecimal
import java.math.RoundingMode

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
                throw IllegalArgumentException("Subcategory's edition has not started yet")
            }
            if (subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
                throw IllegalArgumentException("Subcategory's edition has already ended")
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

        val points = Points(
            student = student,
            teacher = teacher,
            updatedBy = teacher,
            value = BigDecimal(value.toString()).setScale(2, RoundingMode.HALF_UP),
            subcategory = subcategory,
            label = ""
        )
        val savedPoints = pointsRepository.save(points)


        val bonusesMultiplicative = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.MULTIPLICATIVE, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }

        val bonusesAdditivePrev = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.ADDITIVE_PREV, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }

        bonusesMultiplicative.forEach { bonus ->
            bonus.updateMultiplicativePoints(bonusRepository, pointsRepository)
        }
        bonusesAdditivePrev.forEach { bonus ->
            bonus.updateAdditivePrevPoints(bonusRepository, pointsRepository)
        }

        return savedPoints
    }

    @DgsMutation
    @Transactional
    fun editPoints(
        @InputArgument pointsId: Long,
        @InputArgument updatedById: Long,
        @InputArgument value: Float?
    ): Points {
        val points = pointsRepository.findById(pointsId)
            .orElseThrow { IllegalArgumentException("Invalid points ID") }

        if (points.subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Subcategory's edition has already ended")
        }

        if (bonusRepository.findByPoints(points).isNotEmpty()) {
            throw IllegalArgumentException("Points with bonuses cannot be edited")
        }

        value?.let { newValue ->
            if (newValue < 0) {
                throw IllegalArgumentException("Value cannot be negative")
            }

            if (newValue > points.subcategory.maxPoints.toFloat()) {
                throw IllegalArgumentException("Student cannot have more than ${points.subcategory.maxPoints} points in this subcategory")
            }

            points.value = newValue.toBigDecimal().setScale(2, RoundingMode.HALF_UP)
        }

        updatedById.let {
            val updatedBy = usersRepository.findByUserId(it)
                .orElseThrow { IllegalArgumentException("Invalid user ID") }
            if (updatedBy.role != UsersRoles.TEACHER && updatedBy.role != UsersRoles.COORDINATOR) {
                throw IllegalArgumentException("Points can only be updated by a teacher or coordinator")
            }
            points.updatedBy = updatedBy
        }

        val savedPoints = pointsRepository.save(points)

        val bonusesMultiplicative = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.MULTIPLICATIVE, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }

        val bonusesAdditivePrev = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.ADDITIVE_PREV, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }

        bonusesMultiplicative.forEach { bonus ->
            bonus.updateMultiplicativePoints(bonusRepository, pointsRepository)
        }
        bonusesAdditivePrev.forEach { bonus ->
            bonus.updateAdditivePrevPoints(bonusRepository, pointsRepository)
        }

        return savedPoints
    }

    @DgsMutation
    @Transactional
    fun removePoints(@InputArgument pointsId: Long): Boolean {
        val points = pointsRepository.findById(pointsId)
            .orElseThrow { IllegalArgumentException("Invalid points ID") }

        if (points.subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Subcategory's edition has already ended")
        }
        if (bonusRepository.findByPoints(points).isNotEmpty()) {
            throw IllegalArgumentException("Points from bonuses cannot be deleted")
        }

        val bonusesMultiplicative = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.MULTIPLICATIVE, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }
        val bonusesAdditivePrev = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.ADDITIVE_PREV, points.student)
            .filter { bonus -> bonus.points.subcategory.edition == points.subcategory.edition }
            .filter { bonus -> bonus.points.subcategory.category == points.subcategory.category }

        pointsRepository.delete(points)

        bonusesMultiplicative.forEach { bonus ->
            bonus.updateMultiplicativePoints(bonusRepository, pointsRepository)
        }
        bonusesAdditivePrev.forEach { bonus ->
            bonus.updateAdditivePrevPoints(bonusRepository, pointsRepository)
        }
        return true
    }
}
