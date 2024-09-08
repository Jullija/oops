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
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class ChestHistoryDataFetcher {
    @Autowired
    lateinit var bonusesRepository: BonusesRepository

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
    lateinit var chestsRepository: ChestsRepository

    @Autowired
    lateinit var chestHistoryRepository: ChestHistoryRepository

    @DgsMutation
    @Transactional
    fun addChestToUser(@InputArgument userId: Long, @InputArgument chestId: Long, @InputArgument teacherId: Long,
                       @InputArgument subcategoryId: Long): ChestHistory {
        val user = usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }
        if (user.userGroups.isEmpty()) {
            throw IllegalArgumentException("User has no groups")
        }
        if (user.role != UsersRoles.STUDENT) {
            throw IllegalArgumentException("User must be a student")
        }
        val userEditions = user.userGroups.map { it.group.edition }
        if (userEditions.isEmpty()) {
            throw IllegalArgumentException("User has no editions")
        }
        val chest = chestsRepository.findById(chestId)
            .orElseThrow { IllegalArgumentException("Invalid chest ID") }
        if (chest.edition.startDate.isAfter(java.time.LocalDate.now())){
            throw IllegalArgumentException("Chest edition has not started yet")
        }
        if (chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Chest edition has already ended")
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
}
