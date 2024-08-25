package backend.graphql

import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.levels.Levels
import backend.levels.LevelsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class SubcategoriesDataFetcher {

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

    @DgsMutation
    @Transactional
    fun generateSubcategories(@InputArgument editionId: Long, @InputArgument categoryId: Long,
                              @InputArgument subcategoryPrefix: String,
                              @InputArgument subcategoryCount: Int, @InputArgument maxPoints: Float): List<Subcategories> {
        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }
        val category = categoriesRepository.findById(categoryId).orElseThrow { throw Exception("Category not found") }
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
                maxPoints = maxPoints,
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
        val category = categoriesRepository.findById(categoryId).orElseThrow { throw Exception("Category not found") }
        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }
        if (maxPoints < 0) {
            throw IllegalArgumentException("Max points must be greater than or equal to 0")
        }
        if (ordinalNumber < 0) {
            throw IllegalArgumentException("Ordinal number must be greater or equal to 0")
        }
        if (subcategoryName.isBlank()) {
            throw IllegalArgumentException("Subcategory name must not be blank")
        }
        if (subcategoriesRepository.findBySubcategoryNameAndCategoryAndEdition(subcategoryName, category, edition).isPresent) {
            throw IllegalArgumentException("Subcategory with name $subcategoryName already exists")
        }
        val ordinalNumbers = subcategoriesRepository.findByCategoryAndEdition(category, edition).map { it.ordinalNumber }
        if (ordinalNumbers.contains(ordinalNumber)) {
            throw IllegalArgumentException("Subcategory with ordinal number $ordinalNumber already exists")
        }
        if (ordinalNumbers.isEmpty() && ordinalNumber != 0) {
            throw IllegalArgumentException("First subcategory must have ordinal number 0")
        }
        if (ordinalNumbers.isNotEmpty() && ordinalNumbers.max() != ordinalNumber - 1) {
            throw IllegalArgumentException("Ordinal number must be greater by 1 than the previous subcategory")
        }
        return Subcategories(
            subcategoryName = subcategoryName,
            maxPoints = maxPoints,
            ordinalNumber = ordinalNumber,
            category = category,
            edition = edition,
            label = label
        )
    }
}
