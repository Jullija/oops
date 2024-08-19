package backend.graphql

import backend.award.AwardRepository
import backend.award.AwardType
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.chests.ChestsRepository
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.groups.GroupsRepository
import backend.points.Points
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.Users
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.sql.Time

@DgsComponent
class ChestsDataFetcher {

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
    lateinit var chestsRepository: ChestsRepository

    @DgsMutation
    @Transactional
    fun assignPhotoToChest(@InputArgument chestId: Long, @InputArgument fileId: Long?): Boolean {
        val chest = chestsRepository.findById(chestId).orElseThrow { IllegalArgumentException("Invalid chest ID") }
        val photo = if (fileId == null){
            fileEntityRepository.findAllByFileType("image/chest/sample").firstOrNull()
        } else {
            fileEntityRepository.findById(fileId).orElseThrow { IllegalArgumentException("Invalid file ID") }
        }

        if (photo != null) {
            if (photo.fileType != "image/chest") {
                throw IllegalArgumentException("File with ID $fileId is not a chest. " +
                        "Please upload a file with fileType = image/chest and try again.")
            }
        }
        chest.imageFile = photo
        chestsRepository.save(chest)

        return true
    }
}
