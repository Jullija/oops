package backend.graphql

import backend.award.AwardRepository
import backend.award.AwardType
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
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
class AwardsDataFetcher {

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

    @DgsMutation
    @Transactional
    fun assignPhotoToAward(@InputArgument awardId: Long, @InputArgument fileId: Long?): Boolean {
        val award = awardRepository.findById(awardId).orElseThrow { IllegalArgumentException("Invalid award ID") }
        val photo = if (fileId == null){
            fileEntityRepository.findAllByFileType("image/award/sample").firstOrNull()
        } else {
            fileEntityRepository.findById(fileId).orElseThrow { IllegalArgumentException("Invalid file ID") }
        }

        if (photo != null) {
            if (photo.fileType != "image/award") {
                throw IllegalArgumentException("File with ID $fileId is not an award. " +
                        "Please upload a file with fileType = image/award and try again.")
            }
        }
        award.imageFile = photo
        awardRepository.save(award)

        return true
    }
}
