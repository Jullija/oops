package backend.graphql

import backend.award.Award
import backend.award.AwardRepository
import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.CategoriesRepository
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

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @DgsMutation
    @Transactional
    fun assignPhotoToAward(@InputArgument awardId: Long, @InputArgument fileId: Long?): Boolean {
        return photoAssigner.assignPhotoToAssignee(awardRepository, "image/award", awardId, fileId)
    }

    @DgsMutation
    @Transactional
    fun addAward(@InputArgument awardName: String, @InputArgument awardType: String, @InputArgument awardValue: Float,
                 @InputArgument categoryId: Long, @InputArgument maxUsages: Int = -1,
                 @InputArgument label: String = ""): Award {

        val awardType1 = try {
             AwardType.valueOf(awardType)
        } catch (e: IllegalArgumentException) {
            throw IllegalArgumentException("Invalid award type")
        }
        if ((awardType1 == AwardType.ADDITIVE ||
                    awardType1 == AwardType.ADDITIVE_NEXT ||
                    awardType1 == AwardType.ADDITIVE_PREV) && awardValue < 0) {
            throw IllegalArgumentException("Additive award value must be positive")
        }
        if (awardType1 == AwardType.MULTIPLICATIVE && awardValue <= 0) {
            throw IllegalArgumentException("Multiplicative award value must be positive")
        }
        if (awardType1 == AwardType.MULTIPLICATIVE && awardValue > 1) {
            throw IllegalArgumentException("Multiplicative award value must be less than or equal to 1")
        }
        val category = categoriesRepository.findById(categoryId).orElseThrow { IllegalArgumentException("Invalid category ID") }

        if (!category.canAddPoints) {
            throw IllegalArgumentException("This category does not allow adding points from awards")
        }

        val award = Award(
            awardName = awardName,
            awardType = awardType1,
            awardValue = awardValue,
            category = category,
            maxUsages = maxUsages,
            label = ""
        )
        awardRepository.save(award)
        return award
    }
}
