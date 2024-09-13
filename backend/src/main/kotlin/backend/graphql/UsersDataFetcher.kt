package backend.graphql

import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.levels.Levels
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.Users
import backend.users.UsersRoles
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import kotlin.math.min

@DgsComponent
class UsersDataFetcher {

    @Autowired
    private lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    private lateinit var editionRepository: EditionRepository

    @Autowired
    private lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @DgsMutation
    @Transactional
    fun assignPhotoToUser(@InputArgument userId: Long, @InputArgument fileId: Long?): Boolean {
        return photoAssigner.assignPhotoToAssignee(usersRepository, "image/user", userId, fileId)
    }

    @DgsMutation
    @Transactional
    fun addUser(@InputArgument indexNumber: Int, @InputArgument nick: String,
                @InputArgument firstName: String, @InputArgument secondName: String,
                @InputArgument role: String, @InputArgument label: String = ""): Users {
        if (usersRepository.existsByIndexNumber(indexNumber)) {
            throw IllegalArgumentException("User with index number $indexNumber already exists")
        }
        if (usersRepository.findByNick(nick) != null) {
            throw IllegalArgumentException("User with nick $nick already exists")
        }
        val userRole1 = try {
            UsersRoles.valueOf(role.uppercase())
        } catch (e: IllegalArgumentException) {
            throw IllegalArgumentException("Invalid role")
        }
        val user = Users(
            indexNumber = indexNumber,
            nick = nick,
            firstName = firstName,
            secondName = secondName,
            role = userRole1,
            label = label
        )
        return usersRepository.save(user)
    }

    @DgsMutation
    @Transactional
    fun editUser(
        @InputArgument userId: Long,
        @InputArgument indexNumber: Int?,
        @InputArgument nick: String?,
        @InputArgument firstName: String?,
        @InputArgument secondName: String?,
        @InputArgument role: String?,
        @InputArgument label: String?
    ): Users {
        val user = usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("User not found") }

        indexNumber?.let {
            if (usersRepository.existsByIndexNumber(it) && it != user.indexNumber) {
                throw IllegalArgumentException("User with index number $it already exists")
            }
            user.indexNumber = it
        }

        nick?.let {
            if (usersRepository.findByNick(it) != null && it != user.nick) {
                throw IllegalArgumentException("User with nick $it already exists")
            }
            user.nick = it
        }

        firstName?.let {
            user.firstName = it
        }

        secondName?.let {
            user.secondName = it
        }

        role?.let {
            val userRole = try {
                UsersRoles.valueOf(it.uppercase())
            } catch (e: IllegalArgumentException) {
                throw IllegalArgumentException("Invalid role")
            }
            user.role = userRole
        }

        label?.let {
            user.label = it
        }

        return usersRepository.save(user)
    }

    @DgsMutation
    @Transactional
    fun removeUser(@InputArgument userId: Long): Boolean {
        val user = usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("User not found") }

        if (user.role == UsersRoles.COORDINATOR){
            throw IllegalArgumentException("Cannot remove coordinator")
        }

        if (user.userGroups.isNotEmpty()){
            throw IllegalArgumentException("Cannot remove user that is in a group")
        }

        usersRepository.delete(user)
        return true
    }


    @DgsQuery
    @Transactional
    fun getStudentPoints(@InputArgument studentId: Long, @InputArgument editionId: Long): StudentPointsType {
        val user = usersRepository.findById(studentId).orElseThrow { IllegalArgumentException("Invalid student ID") }
        if (user.role != UsersRoles.STUDENT) {
            throw IllegalArgumentException("User is not a student")
        }
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        if (user.userGroups.none { it.group.edition == edition }) {
            throw IllegalArgumentException("Student is not participating in this edition")
        }
        val teacher = user.userGroups.filter { it.group.edition == edition }.firstOrNull()?.group?.teacher
            ?: throw IllegalArgumentException("Student is not in any group")
        val points = pointsRepository.findAllByStudentAndSubcategory_Edition(user, edition)
        val bonuses = bonusesRepository.findByChestHistory_User_UserId(studentId)

        val additivePrevBonuses = bonuses.filter { it.award.awardType == AwardType.ADDITIVE_PREV }

        val additivePrevBonusesMap = additivePrevBonuses.associateWith { it.points.value }.toMutableMap()

        val subcategoryPoints = points.sortedByDescending { it.subcategory.ordinalNumber }.groupBy { it.subcategory }
            .map { (subcategory, points) ->
                val purePoints = points.filter { bonusesRepository.findByPoints(it).isEmpty() }.firstOrNull()
                val allBonuses = bonuses.filter { (it.award.awardType != AwardType.MULTIPLICATIVE && it.award.awardType != AwardType.ADDITIVE_PREV && it.points.subcategory == subcategory)  ||
                        ((it.award.awardType == AwardType.MULTIPLICATIVE || it.award.awardType == AwardType.ADDITIVE_PREV) && it.points.subcategory.category == subcategory.category) }
                val partialBonusType = allBonuses.map { bonus ->
                    PartialBonusType(
                        bonuses = bonus,
                        partialValue = if (bonus.award.awardType == AwardType.MULTIPLICATIVE) {
                            purePoints?.value?.times(bonus.award.awardValue) ?: 0f
                        } else if (bonus.award.awardType == AwardType.ADDITIVE_PREV) {
                            val contribution = min(
                                additivePrevBonusesMap[bonus] ?: 0f,
                                purePoints?.value?.let { (purePoints.subcategory.maxPoints).minus(it) } ?: 0f
                            )
                            additivePrevBonusesMap[bonus] = (additivePrevBonusesMap[bonus] ?: 0f) - contribution
                            contribution
                        } else {
                            bonus.points.value
                        }
                    )
                }
                val teacherToPoints = purePoints?.teacher ?: allBonuses.maxByOrNull { it.updatedAt }?.points?.teacher ?: Users()
                val createdAt = purePoints?.createdAt ?: allBonuses.minOfOrNull { it.points.createdAt } ?: LocalDateTime.now()
                val updatedAt = purePoints?.updatedAt ?: allBonuses.maxOfOrNull { it.points.updatedAt } ?: LocalDateTime.now()
                SubcategoryPointsType(
                    subcategory = subcategory,
                    points = PurePointsType(
                        purePoints = purePoints,
                        partialBonusType = partialBonusType
                    ),
                    teacher = teacherToPoints,
                    createdAt = createdAt,
                    updatedAt = updatedAt
                )
            }

        val sumOfPurePoints = subcategoryPoints.sumOf { it.points.purePoints?.value?.toDouble() ?: 0.0 }.toFloat()
        val sumOfBonuses = subcategoryPoints.sumOf { it.points.partialBonusType.sumOf { it.partialValue.toDouble() } }
            .toFloat()
        val sumOfAll = sumOfPurePoints + sumOfBonuses

        return StudentPointsType(
            user = user,
            teacher = teacher,
            level = user.getLevelByEdition(edition)?.level,
            subcategoryPoints = subcategoryPoints.sortedByDescending { it.createdAt },
            sumOfPurePoints = sumOfPurePoints,
            sumOfBonuses = sumOfBonuses,
            sumOfAll = sumOfAll
        )
    }

    @DgsQuery
    @Transactional
    fun getSumOfPointsForStudentByCategory(@InputArgument studentId: Long, @InputArgument editionId: Long): List<CategoryPointsSumType> {
        val user = usersRepository.findById(studentId).orElseThrow { IllegalArgumentException("Invalid student ID") }
        if (user.role != UsersRoles.STUDENT) {
            throw IllegalArgumentException("User is not a student")
        }
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        if (user.userGroups.none { it.group.edition == edition }) {
            throw IllegalArgumentException("Student is not participating in this edition")
        }
        val points = pointsRepository.findAllByStudentAndSubcategory_Edition(user, edition)
        val bonuses = bonusesRepository.findByChestHistory_User_UserId(studentId).filter { it.points.subcategory.edition == edition }
        val categories = categoriesRepository.findByCategoryEdition_Edition(edition)

        return categories.filter{it.canAddPoints}
                .map { category ->
                    val categoryPoints = points.filter { it.subcategory.category == category }
                    val purePoints = categoryPoints.filter { bonusesRepository.findByPoints(it).isEmpty() }
                    val purePointsSum = purePoints.sumOf { it.value.toDouble() }.toFloat()
                    val bonusesSum = bonuses.filter { it.points.subcategory.category == category && it.points.subcategory.edition == edition }
                        .sumOf { it.points.value.toDouble() }.toFloat()
                    val totalSum = purePointsSum + bonusesSum
                    val maxPoints = subcategoriesRepository.findByCategoryAndEdition(category, edition)
                        .sumOf { it.maxPoints.toDouble() }.toFloat()

                    CategoryPointsSumType(
                        category = category,
                        sumOfPurePoints = purePointsSum,
                        sumOfBonuses = bonusesSum,
                        sumOfAll = totalSum,
                        maxPoints = maxPoints
                    )
                }
    }
}

data class StudentPointsType(
    val user: Users,
    val teacher: Users,
    val level: Levels?,
    val subcategoryPoints: List<SubcategoryPointsType>,
    val sumOfPurePoints: Float,
    val sumOfBonuses: Float,
    val sumOfAll: Float
)

data class CategoryPointsSumType(
    val category: Categories,
    val sumOfPurePoints: Float,
    val sumOfBonuses: Float,
    val sumOfAll: Float,
    val maxPoints: Float
)
