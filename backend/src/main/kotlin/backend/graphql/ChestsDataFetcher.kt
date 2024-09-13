package backend.graphql

import backend.categories.CategoriesRepository
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
import java.time.LocalDate

@DgsComponent
class ChestsDataFetcher {
    @Autowired
    private lateinit var chestAwardRepository: ChestAwardRepository

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

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @DgsMutation
    @Transactional
    fun assignPhotoToChest(@InputArgument chestId: Long, @InputArgument fileId: Long?): Boolean {
        val chest = chestsRepository.findById(chestId).orElseThrow { IllegalArgumentException("Invalid chest ID") }
        if (chest.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }
        return photoAssigner.assignPhotoToAssignee(chestsRepository, "image/chest", chestId, fileId)
    }

    @DgsMutation
    @Transactional
    fun addChest(@InputArgument chestType: String, @InputArgument editionId: Long, @InputArgument label: String = ""): Chests {
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        if (chestsRepository.existsByChestTypeAndEditionAndActive(chestType, edition, true)) {
            throw IllegalArgumentException("Chest with type $chestType already exists for edition ${edition.editionId}")
        }
        if (edition.endDate.isBefore(LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }
        val chest = Chests(
            chestType = chestType,
            label = label,
            edition = edition
        )
        return chestsRepository.save(chest)
    }

    @DgsMutation
    @Transactional
    fun editChest(
        @InputArgument chestId: Long,
        @InputArgument chestType: String?,
        @InputArgument editionId: Long?,
        @InputArgument label: String?
    ): Chests {
        val chest = chestsRepository.findById(chestId).orElseThrow { IllegalArgumentException("Invalid chest ID") }

        if (chest.edition.endDate.isBefore(LocalDate.now())) {
            throw IllegalArgumentException("Edition has already ended")
        }
        chestType?.let {
            if (chest.edition.startDate.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("Edition has already started")
            }
            if (chestsRepository.existsByChestTypeAndEditionAndActive(it, chest.edition, true) && it != chest.chestType) {
                throw IllegalArgumentException("Chest with type $it already exists for edition ${chest.edition.editionId}")
            }
            chest.chestType = it
        }

        editionId?.let {
            if (chest.edition.startDate.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("Edition has already started")
            }
            val edition = editionRepository.findById(it).orElseThrow { IllegalArgumentException("Invalid edition ID") }
            chest.edition = edition
        }

        label?.let {
            chest.label = it
        }

        return chestsRepository.save(chest)
    }

    @DgsMutation
    @Transactional
    fun removeChest(@InputArgument chestId: Long): Boolean {
        val chest = chestsRepository.findById(chestId).orElseThrow { IllegalArgumentException("Invalid chest ID") }
        if (chest.edition.endDate.isBefore(LocalDate.now())) {
            throw IllegalArgumentException("Edition has already ended")
        }
        if (chest.edition.startDate.isBefore(LocalDate.now())) {
            throw IllegalArgumentException("Edition has already started")
        }
        chestAwardRepository.findByChest(chest).forEach {
            chestAwardRepository.delete(it)
        }

        chestsRepository.delete(chest)
        return true
    }
}
