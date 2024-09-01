package backend.graphql

import backend.award.Award
import backend.award.AwardRepository
import backend.award.AwardType
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.Edition
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.groups.GroupsRepository
import backend.levels.Levels
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
import java.time.LocalDate

@DgsComponent
class EditionDataFetcher {

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

    @DgsMutation
    @Transactional
    fun addEdition(@InputArgument editionName: String, @InputArgument editionYear: Int, @InputArgument label: String = ""): Edition {
        if (editionRepository.existsByEditionName(editionName)) {
            throw IllegalArgumentException("Edition with name $editionName already exists")
        }
        if (editionRepository.existsByEditionYear(editionYear)) {
            throw IllegalArgumentException("Edition with year $editionYear already exists")
        }

        val currentYear = LocalDate.now().year

        if (editionYear < currentYear-1 || editionYear > currentYear + 10) {
            throw IllegalArgumentException("Edition year must be between ${currentYear-1} and ${currentYear + 10}")
        }

        val endDate = LocalDate.of(editionYear + 1, 7, 20)

        val edition = Edition(
            editionName = editionName,
            editionYear = editionYear,
            endDate = endDate,
            label = label)
        return editionRepository.save(edition)
    }
}
