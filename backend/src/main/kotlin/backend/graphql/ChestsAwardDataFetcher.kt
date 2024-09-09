package backend.graphql

import backend.award.AwardRepository
import backend.awardEdition.AwardEdition
import backend.bonuses.BonusesRepository
import backend.categories.CategoriesRepository
import backend.chestAward.ChestAward
import backend.chestAward.ChestAwardRepository
import backend.chests.Chests
import backend.chests.ChestsRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.groups.GroupsRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class ChestsAwardDataFetcher {
    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var bonusesRepository: BonusesRepository

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

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @Autowired
    lateinit var awardRepository: AwardRepository

    @Autowired
    lateinit var chestAwardRepository: ChestAwardRepository

    @DgsMutation
    @Transactional
    fun addAwardToChest(@InputArgument awardId: Long, @InputArgument chestId: Long): ChestAward {
        val award = awardRepository.findById(awardId).orElseThrow { throw IllegalArgumentException("Award not found") }
        val chest = chestsRepository.findById(chestId).orElseThrow { throw IllegalArgumentException("Chest not found") }

        if (chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }

        if (award.awardEditions.none { it.edition == chest.edition }){
            throw IllegalArgumentException("Award does not exist in this edition")
        }

        if (chestAwardRepository.existsByAwardAndChest(award, chest)){
            throw IllegalArgumentException("Award already exists in this chest")
        }

        val chestAward = ChestAward(
            award = award,
            chest = chest,
            label = ""
        )
        return chestAwardRepository.save(chestAward)
    }

    @DgsMutation
    @Transactional
    fun removeAwardFromChest(@InputArgument awardId: Long, @InputArgument chestId: Long): Boolean {
        val award = awardRepository.findById(awardId).orElseThrow { throw IllegalArgumentException("Award not found") }
        val chest = chestsRepository.findById(chestId).orElseThrow { throw IllegalArgumentException("Chest not found") }

        if (!chestAwardRepository.existsByAwardAndChest(award, chest)){
            throw IllegalArgumentException("This award does not exist in this chest")
        }

        if (chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }

        if (bonusesRepository.findAllByAward(award)
                .map { it.points }
                .filter { points -> points.subcategory.edition == chest.edition }.isNotEmpty()) {
            throw IllegalArgumentException("Award has bonuses in this edition")
        }

        chestAwardRepository.deleteByAwardAndChest(award, chest)
        return true
    }
}
