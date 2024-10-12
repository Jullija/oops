package backend.graphql

import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.levels.Levels
import backend.levels.LevelsRepository
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.utils.UserMapper
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.math.RoundingMode

@DgsComponent
class SubcategoriesDataFetcher {
    @Autowired
    private lateinit var userMapper: UserMapper

    @Autowired
    private lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @Autowired
    lateinit var fileEntityRepository: FileEntityRepository

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @DgsMutation
    @Transactional
    fun generateSubcategories(@InputArgument editionId: Long, @InputArgument categoryId: Long,
                              @InputArgument subcategoryPrefix: String,
                              @InputArgument subcategoryCount: Int, @InputArgument maxPoints: Float): List<Subcategories> {
        val currentUser = userMapper.getCurrentUser()


        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }
        if (edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }
        val category = categoriesRepository.findById(categoryId).orElseThrow { throw Exception("Category not found") }
        if (category.categoryEdition.none { it.edition == edition }) {
            throw IllegalArgumentException("Category with id $categoryId does not exist in edition with id $editionId")
        }
        if (subcategoriesRepository.findByCategoryAndEdition(category, edition).isNotEmpty()) {
            throw IllegalArgumentException("Subcategories for category with id $categoryId and edition with id $editionId already exist")
        }
        val subcategories = mutableListOf<Subcategories>()
        if (subcategoryCount < 1) {
            throw IllegalArgumentException("Subcategory count must be greater than 0")
        }
        if (maxPoints < 0) {
            throw IllegalArgumentException("Max points must be greater than or equal to 0")
        }
        if (subcategoryPrefix.isBlank()) {
            throw IllegalArgumentException("Subcategory prefix must not be blank")
        }
        for (i in 0..<subcategoryCount) {
            val subcategory = Subcategories(
                subcategoryName = "${subcategoryPrefix}_$i",
                maxPoints = maxPoints.toBigDecimal().setScale(2, RoundingMode.HALF_UP),
                ordinalNumber = i,
                category = category,
                edition = edition,
                label = ""
            )
            subcategories.add(subcategory)
        }
        return subcategories
    }

    @DgsMutation
    @Transactional
    fun addSubcategory(@InputArgument subcategoryName: String, @InputArgument maxPoints: Float,
                       @InputArgument ordinalNumber: Int, @InputArgument categoryId: Long,
                       @InputArgument editionId: Long, @InputArgument label: String): Subcategories {
        val currentUser = userMapper.getCurrentUser()


        val category = categoriesRepository.findById(categoryId).orElseThrow { throw Exception("Category not found") }
        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }
        if (edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Edition has already ended")
        }
        if (category.categoryEdition.none { it.edition == edition }) {
            throw IllegalArgumentException("Category with id $categoryId does not exist in edition with id $editionId")
        }
        if (subcategoryName.isBlank()) {
            throw IllegalArgumentException("Subcategory name must not be blank")
        }
        if (subcategoriesRepository.findBySubcategoryNameAndCategoryAndEdition(subcategoryName, category, edition).isPresent) {
            throw IllegalArgumentException("Subcategory with name $subcategoryName already exists in category $category and edition $editionId")
        }
        if (maxPoints < 0) {
            throw IllegalArgumentException("Max points must be greater than or equal to 0")
        }
        if (ordinalNumber < 0) {
            throw IllegalArgumentException("Ordinal number must be greater or equal to 0")
        }
        val ordinalNumbers = subcategoriesRepository.findByCategoryAndEdition(category, edition).map { it.ordinalNumber }
        if (ordinalNumbers.contains(ordinalNumber)) {
            throw IllegalArgumentException("Subcategory with ordinal number $ordinalNumber already exists")
        }
        if (ordinalNumbers.isEmpty() && ordinalNumber != 0) {
            throw IllegalArgumentException("First subcategory must have ordinal number 0")
        }
        if (ordinalNumbers.isNotEmpty() && ordinalNumbers.max() != ordinalNumber - 1) {
            throw IllegalArgumentException("Ordinal number must be greater by 1 than the previous subcategory-(${ordinalNumbers.max()})")
        }
        val subcategories = Subcategories(
            subcategoryName = subcategoryName,
            maxPoints = maxPoints.toBigDecimal().setScale(2, RoundingMode.HALF_UP),
            ordinalNumber = ordinalNumber,
            category = category,
            edition = edition,
            label = label
        )
        return subcategoriesRepository.save(subcategories)
    }

    @DgsMutation
    @Transactional
    fun editSubcategory(
        @InputArgument subcategoryId: Long,
        @InputArgument subcategoryName: String?,
        @InputArgument maxPoints: Float?,
        @InputArgument ordinalNumber: Int?,
        @InputArgument label: String?
    ): Subcategories {
        val currentUser = userMapper.getCurrentUser()


        val subcategory = subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Subcategory not found") }

        if (subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Subcategory's edition has already ended")
        }


        subcategoryName?.let {
            if (it.isBlank()) {
                throw IllegalArgumentException("Subcategory name must not be blank")
            }
            if (subcategoriesRepository.findBySubcategoryNameAndCategoryAndEdition(it, subcategory.category, subcategory.edition).isPresent) {
                throw IllegalArgumentException("Subcategory with name $it already exists in the same category and edition")
            }
            subcategory.subcategoryName = it
        }

        maxPoints?.let {
            if (subcategory.edition.startDate.isBefore(java.time.LocalDate.now())){
                throw IllegalArgumentException("Subcategory's edition has already started")
            }
            if (it < 0) {
                throw IllegalArgumentException("Max points must be greater than or equal to 0")
            }
            subcategory.maxPoints = it.toBigDecimal().setScale(2, RoundingMode.HALF_UP)
        }

        ordinalNumber?.let {
            if (subcategory.edition.startDate.isBefore(java.time.LocalDate.now())){
                throw IllegalArgumentException("Subcategory's edition has already started")
            }
            if (it < 0) {
                throw IllegalArgumentException("Ordinal number must be greater or equal to 0")
            }
            val ordinalNumbers = subcategoriesRepository.findByCategoryAndEdition(subcategory.category, subcategory.edition).map { it.ordinalNumber }
            if (ordinalNumbers.contains(it) && it != subcategory.ordinalNumber) {
                throw IllegalArgumentException("Subcategory with ordinal number $it already exists")
            }
            if (ordinalNumbers.isEmpty() && it != 0) {
                throw IllegalArgumentException("First subcategory must have ordinal number 0")
            }
            subcategory.ordinalNumber = it
        }

        label?.let {
            subcategory.label = it
        }

        return subcategoriesRepository.save(subcategory)

    }

    @DgsMutation
    @Transactional
    fun removeSubcategory(@InputArgument subcategoryId: Long): Boolean {
        val currentUser = userMapper.getCurrentUser()


        val subcategory = subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Subcategory not found") }

        if (subcategory.edition.endDate.isBefore(java.time.LocalDate.now())){
            throw IllegalArgumentException("Subcategory's edition has already ended")
        }
        if (pointsRepository.findBySubcategory(subcategory).isNotEmpty()) {
            throw IllegalArgumentException("Subcategory has points")
        }
        subcategoriesRepository.delete(subcategory)
        return true
    }
}
