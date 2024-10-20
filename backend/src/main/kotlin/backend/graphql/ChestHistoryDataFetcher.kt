package backend.graphql

import backend.award.AwardRepository
import backend.bonuses.BonusesRepository
import backend.categories.CategoriesRepository
import backend.chestHistory.ChestHistory
import backend.chestHistory.ChestHistoryRepository
import backend.chests.ChestsRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.groups.GroupsRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.UsersRoles
import backend.utils.UserMapper
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDate

@DgsComponent
class ChestHistoryDataFetcher {
    @Autowired
    private lateinit var userMapper: UserMapper

    @Autowired
    private lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var groupsRepository: GroupsRepository

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var fileEntityRepository: FileEntityRepository

    @Autowired
    lateinit var awardRepository: AwardRepository

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @Autowired
    private lateinit var chestsRepository: ChestsRepository

    @Autowired
    private lateinit var chestHistoryRepository: ChestHistoryRepository

    @DgsMutation
    @Transactional
    fun addChestToUser(@InputArgument userId: Long, @InputArgument chestId: Long, @InputArgument teacherId: Long,
                       @InputArgument subcategoryId: Long): ChestHistory {
        val currentUser = userMapper.getCurrentUser()
        if (!(currentUser.role == UsersRoles.TEACHER || currentUser.role == UsersRoles.COORDINATOR)) {
            throw IllegalArgumentException("User must be a teacher or coordinator")
        }

        val user = usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }
        if (user.userGroups.isEmpty()) {
            throw IllegalArgumentException("User has no groups")
        }
        if (user.role != UsersRoles.STUDENT) {
            throw IllegalArgumentException("User must be a student")
        }

        if (currentUser.role == UsersRoles.TEACHER){
            if (currentUser.userId != teacherId){
                throw IllegalArgumentException("Teacher must be the current user")
            }
            val studentGroups = user.userGroups.map { it.group }.filter { it.teacher == currentUser }
            if (studentGroups.isEmpty()){
                throw IllegalArgumentException("Student is not in a group of the current user")
            }
        }


        val userEditions = user.userGroups.map { it.group.edition }
        if (userEditions.isEmpty()) {
            throw IllegalArgumentException("User has no editions")
        }
        val chest = chestsRepository.findById(chestId)
            .orElseThrow { IllegalArgumentException("Invalid chest ID") }
        if (chest.edition.startDate.isAfter(java.time.LocalDate.now())){
            throw IllegalArgumentException("Chest's edition has not started yet")
        }
        if (chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Chest's edition has already ended")
        }
        if (!userEditions.contains(chest.edition)) {
            throw IllegalArgumentException("Chest and user must have the same edition")
        }
        val teacher = usersRepository.findById(teacherId)
            .orElseThrow { IllegalArgumentException("Invalid teacher ID") }
        if (teacher.role != UsersRoles.TEACHER && teacher.role != UsersRoles.COORDINATOR) {
            throw IllegalArgumentException("Teacher must be a teacher or coordinator")
        }
        if (teacher.userGroups.isEmpty()) {
            throw IllegalArgumentException("Teacher has no groups")
        }
        if (!teacher.userGroups.map { it.group.edition }.contains(chest.edition)) {
            throw IllegalArgumentException("Teacher and chest must have the same edition")
        }
        if (teacherId == userId) {
            throw IllegalArgumentException("Teacher and user cannot be the same")
        }
        if (teacher.role == UsersRoles.TEACHER && user.userGroups.none { it.group.teacher == teacher }) {
            throw IllegalArgumentException("Teacher is not a teacher of user's group")
        }
        val subcategory = subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Invalid subcategory ID") }
        if (subcategory.edition != chest.edition) {
            throw IllegalArgumentException("Subcategory and chest must have the same edition")
        }

        val chestHistory = ChestHistory(
            user = user,
            teacher = teacher,
            chest = chest,
            subcategory = subcategory,
            label = chest.label)

        chestHistoryRepository.save(chestHistory)

        return chestHistory
    }

    @DgsMutation
    @Transactional
    fun editChestHistory(
        @InputArgument chestHistoryId: Long,
        @InputArgument userId: Long?,
        @InputArgument chestId: Long?,
        @InputArgument teacherId: Long?,
        @InputArgument subcategoryId: Long?,
        @InputArgument label: String?
    ): ChestHistory {
        val currentUser = userMapper.getCurrentUser()
        if (!(currentUser.role == UsersRoles.TEACHER || currentUser.role == UsersRoles.COORDINATOR)) {
            throw IllegalArgumentException("User must be a teacher or coordinator")
        }

        val chestHistory = chestHistoryRepository.findById(chestHistoryId)
            .orElseThrow { IllegalArgumentException("Invalid chest history ID") }

        if (chestHistory.chest.edition.endDate.isBefore(LocalDate.now())){
            throw IllegalArgumentException("Chest's edition has already ended")
        }

        if (chestHistory.opened){
            throw IllegalArgumentException("Chest has already been opened")
        }

        if (currentUser.role == UsersRoles.TEACHER){
            if (chestHistory.user.userGroups.map { it.group }.none { it.teacher == currentUser }){
                throw IllegalArgumentException("Teacher is not a teacher of student's group")
            }
        }

        userId?.let { id ->
            val user = usersRepository.findById(id)
                .orElseThrow { IllegalArgumentException("Invalid user ID") }

            if (user.userGroups.isEmpty()) {
                throw IllegalArgumentException("User has no groups")
            }
            if (user.role != UsersRoles.STUDENT) {
                throw IllegalArgumentException("User must be a student")
            }

            if (currentUser.role == UsersRoles.TEACHER){
                val studentGroups = user.userGroups.map { it.group }.filter { it.teacher == currentUser }
                if (studentGroups.isEmpty()){
                    throw IllegalArgumentException("Student is not in a group of the current user")
                }
            }

            val userEditions = user.userGroups.map { group -> group.group.edition }
            if (userEditions.isEmpty()) {
                throw IllegalArgumentException("User has no editions")
            }
            if (!userEditions.contains(chestHistory.chest.edition)) {
                throw IllegalArgumentException("Chest and user must have the same edition")
            }
            chestHistory.user = user
        }

        chestId?.let {
            val chest = chestsRepository.findById(it)
                .orElseThrow { IllegalArgumentException("Invalid chest ID") }

            if (chest.edition.startDate.isAfter(LocalDate.now())) {
                throw IllegalArgumentException("Chest's edition has not started yet")
            }
            if (chest.edition.endDate.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("Chest's edition has already ended")
            }
            if (!chestHistory.user.userGroups.map { group -> group.group.edition }.contains(chest.edition)) {
                throw IllegalArgumentException("Chest and user must have the same edition")
            }
            chestHistory.chest = chest
        }

        teacherId?.let {
            if (currentUser.role == UsersRoles.TEACHER){
                if (currentUser.userId != it){
                    throw IllegalArgumentException("Teacher must be the current user")
                }
            }

            val teacher = usersRepository.findById(it)
                .orElseThrow { IllegalArgumentException("Invalid teacher ID") }

            if (teacher.role != UsersRoles.TEACHER && teacher.role != UsersRoles.COORDINATOR) {
                throw IllegalArgumentException("Teacher must be a teacher or coordinator")
            }
            if (teacher.userGroups.isEmpty()) {
                throw IllegalArgumentException("Teacher has no groups")
            }
            if (!teacher.userGroups.map { group -> group.group.edition }.contains(chestHistory.chest.edition)) {
                throw IllegalArgumentException("Teacher and chest must have the same edition")
            }
            if (it == chestHistory.user.userId) {
                throw IllegalArgumentException("Teacher and user cannot be the same")
            }
            if (teacher.role == UsersRoles.TEACHER && chestHistory.user.userGroups.none { group -> group.group.teacher == teacher }) {
                throw IllegalArgumentException("Teacher is not a teacher of user's group")
            }
            chestHistory.teacher = teacher
        }

        subcategoryId?.let {
            val subcategory = subcategoriesRepository.findById(it)
                .orElseThrow { IllegalArgumentException("Invalid subcategory ID") }

            if (subcategory.edition != chestHistory.chest.edition) {
                throw IllegalArgumentException("Subcategory and chest must have the same edition")
            }
            chestHistory.subcategory = subcategory
        }

        label?.let {
            chestHistory.label = it
        }

        return chestHistoryRepository.save(chestHistory)
    }

    @DgsMutation
    @Transactional
    fun removeChestFromUser(@InputArgument chestHistoryId: Long): Boolean {
        val currentUser = userMapper.getCurrentUser()
        if (!(currentUser.role == UsersRoles.TEACHER || currentUser.role == UsersRoles.COORDINATOR)) {
            throw IllegalArgumentException("User must be a teacher or coordinator")
        }

        val chestHistory = chestHistoryRepository.findById(chestHistoryId)
            .orElseThrow { IllegalArgumentException("Invalid chest history ID") }

        if (chestHistory.chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Chest's edition has already ended")
        }

        if (chestHistory.opened){
            throw IllegalArgumentException("Chest has already been opened")
        }

        if (currentUser.role == UsersRoles.TEACHER){
            if (chestHistory.user.userGroups.map { it.group }.none { it.teacher == currentUser }){
                throw IllegalArgumentException("Teacher is not a teacher of student's group")
            }
        }

        val bonus = bonusesRepository.findByChestHistory(chestHistory).stream().findFirst().orElse(null)

        val points = bonus.points

        pointsRepository.delete(points)
        bonusesRepository.delete(bonus)

        chestHistoryRepository.delete(chestHistory)
        return true
    }
}
