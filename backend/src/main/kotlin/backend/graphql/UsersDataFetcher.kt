package backend.graphql

import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.files.FileRetrievalService
import backend.files.FileUploadService
import backend.groups.GroupsRepository
import backend.levels.Levels
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.userGroups.UserGroups
import backend.userGroups.UserGroupsRepository
import backend.users.FirebaseUserService
import backend.users.UsersRepository
import backend.users.Users
import backend.users.UsersRoles
import backend.utils.CsvReader
import backend.utils.UserMapper
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.math.BigDecimal
import java.math.RoundingMode
import java.time.LocalDateTime
import kotlin.math.min

@DgsComponent
class UsersDataFetcher (private val fileRetrievalService: FileRetrievalService){

    @Autowired
    private lateinit var groupsRepository: GroupsRepository

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

    @Autowired
    lateinit var firebaseUserService: FirebaseUserService

    @Autowired
    lateinit var fileEntityRepository: FileEntityRepository

    @Autowired
    lateinit var userGroupsRepository: UserGroupsRepository

    @Autowired
    lateinit var userMapper: UserMapper

    @Autowired
    lateinit var csvReader: CsvReader

    @DgsMutation
    @Transactional
    fun assignPhotoToUser(@InputArgument userId: Long, @InputArgument fileId: Long?): Boolean {
        return photoAssigner.assignPhotoToAssignee(usersRepository, "image/user", userId, fileId)
    }

    @DgsMutation
    @Transactional
    fun addUser(@InputArgument indexNumber: Int, @InputArgument nick: String,
                @InputArgument firstName: String, @InputArgument secondName: String,
                @InputArgument role: String, @InputArgument email: String = "example@example.com",
                @InputArgument label: String = "", @InputArgument createFirebaseUser: Boolean = false,
                @InputArgument sendEmail: Boolean = false): Users {
        return addUserHelper(indexNumber, nick, firstName, secondName, role, email, label, createFirebaseUser, sendEmail)
    }

    @DgsMutation
    @Transactional
    fun addUsersFromCsv(@InputArgument fileId: Long, @InputArgument editionId: Long): List<Users> {
        val file = fileEntityRepository.findById(fileId).orElseThrow { IllegalArgumentException("File not found") }
        if (file.fileType != "text/csv") {
            throw IllegalArgumentException("Invalid file type")
        }
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Edition not found") }
        if (edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }
        val usosId = csvReader.extractGroupNumber(file.fileName).toLong()
        val group = groupsRepository.findByUsosIdAndEdition(usosId, edition) ?: throw IllegalArgumentException("Group not found")
        val users = csvReader.getUsersFromCsv(file)
        // TODO: change to sendEmail = true
        val addedUsers = users.map { user ->
            addUserHelper(user.indexNumber, user.nick, user.firstName, user.secondName, user.role.name, user.email, user.label, true, false)
        }
        addedUsers.forEach { user ->
            if (!userGroupsRepository.existsByUserAndGroup(user, group)){
                val userGroup = UserGroups(
                    user = user,
                    group = group
                )
                userGroupsRepository.save(userGroup)
            }
        }
        fileRetrievalService.deleteFile(fileId)
        return addedUsers
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
        user.firebaseUid?.let { firebaseUserService.deleteFirebaseUser(it) }
        usersRepository.delete(user)
        return true
    }

    @DgsMutation
    @Transactional
    fun resetPassword(@InputArgument userId: Long): Boolean {
        val user = usersRepository.findByUserId(userId)
            .orElseThrow { IllegalArgumentException("User not found") }
        return firebaseUserService.resetPassword(user.email)
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
                            purePoints?.value?.times(bonus.award.awardValue)?.toFloat() ?: 0f
                        } else if (bonus.award.awardType == AwardType.ADDITIVE_PREV) {
                            val contribution = min(
                                additivePrevBonusesMap[bonus]?.toFloat() ?: 0f,
                                purePoints?.value?.let { (purePoints.subcategory.maxPoints.toFloat()).minus(it.toFloat()) } ?: 0f
                            )
                            additivePrevBonusesMap[bonus] = BigDecimal(((additivePrevBonusesMap[bonus]?.toFloat() ?: 0f) - contribution).toString()).setScale(2, RoundingMode.HALF_UP)
                            contribution
                        } else {
                            bonus.points.value.toFloat()
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

        val sumOfPurePoints = BigDecimal(subcategoryPoints.sumOf { it.points.purePoints?.value?.toDouble() ?: 0.0 }.toString())
            .setScale(2, RoundingMode.HALF_UP).toFloat()
        val sumOfBonuses = BigDecimal(subcategoryPoints.sumOf { it.points.partialBonusType.sumOf { it.partialValue.toDouble() } })
            .setScale(2, RoundingMode.HALF_UP).toFloat()
        val sumOfAll = BigDecimal((sumOfPurePoints + sumOfBonuses).toString()).setScale(2, RoundingMode.HALF_UP).toFloat()

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
    @DgsQuery
    @Transactional
    fun getCurrentUser(): Users {
        val user = userMapper.getUserFromToken() ?: throw IllegalArgumentException("User not authenticated")
        return user
    }

    fun isValidEmail(email: String): Boolean {
        val emailPattern = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
        return email.matches(Regex(emailPattern))
    }
    
    private fun addUserHelper(indexNumber: Int,  nick: String,
                               firstName: String,  secondName: String,
                               role: String,  email: String = "example@example.com",
                               label: String = "",  createFirebaseUser: Boolean = false,
                               sendEmail: Boolean = false): Users {
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
        if (!isValidEmail(email)) {
            throw IllegalArgumentException("Invalid email")
        }
        val user = Users(
            indexNumber = indexNumber,
            nick = nick,
            firstName = firstName,
            secondName = secondName,
            role = userRole1,
            email = email,
            label = label
        )
        usersRepository.save(user)
        if (createFirebaseUser) {
            val firebaseUid = firebaseUserService.createFirebaseUser(user, sendEmail)
            user.firebaseUid = firebaseUid
        }
        return user
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
