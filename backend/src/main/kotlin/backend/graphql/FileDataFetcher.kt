package backend.graphql

import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.files.FileRetrievalService
import backend.files.FileUploadService
import backend.groups.GroupsRepository
import backend.levels.Levels
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.userGroups.UserGroups
import backend.userGroups.UserGroupsRepository
import backend.userLevel.UserLevelRepository
import backend.users.FirebaseUserService
import backend.users.UsersRepository
import backend.users.Users
import backend.users.UsersRoles
import backend.utils.CsvReader
import backend.utils.UserMapper
import com.google.firebase.ErrorCode
import com.google.firebase.auth.FirebaseAuthException
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.apache.catalina.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.transaction.annotation.Transactional
import java.math.BigDecimal
import java.math.RoundingMode
import java.time.LocalDateTime
import kotlin.math.exp
import kotlin.math.min

@DgsComponent
class FileDataFetcher {

    @Autowired
    private lateinit var userLevelRepository: UserLevelRepository

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

    @Value("\${constants.emailDomain}")
    lateinit var emailDomain: String

    @DgsQuery
    @Transactional
    fun getFilesGroupedByType(): List<FileGroup> {
        val files = fileEntityRepository.findAll()
        return files.groupBy { it.fileType }
            .map { (fileType, files) ->
                FileGroup(fileType, files)
            }
    }

    @DgsQuery
    @Transactional
    fun getFilesGroupedByTypeBySelectedTypes(@InputArgument fileTypes: List<String>): List<FileGroup> {
        val selectedFiles = fileEntityRepository.findAllByFileTypeIn(fileTypes)
        return selectedFiles.groupBy { it.fileType }
            .map { (fileType, files) ->
                FileGroup(fileType, files)
            }
    }
}

data class FileGroup(
    val fileType: String,
    val files: List<FileEntity>
)
