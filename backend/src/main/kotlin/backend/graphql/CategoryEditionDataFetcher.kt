package backend.graphql

import backend.award.AwardRepository
import backend.awardEdition.AwardEdition
import backend.awardEdition.AwardEditionRepository
import backend.categories.CategoriesRepository
import backend.categoryEdition.CategoryEdition
import backend.categoryEdition.CategoryEditionRepository
import backend.edition.EditionRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class CategoryEditionDataFetcher {

    @Autowired
    private lateinit var categoryEditionRepository: CategoryEditionRepository

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @DgsMutation
    @Transactional
    fun addCategoryToEdition(@InputArgument categoryId: Long, @InputArgument editionId: Long): CategoryEdition {
        val category = categoriesRepository.findById(categoryId).orElseThrow { throw Exception("Category not found") }
        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }

        if (categoryEditionRepository.existsByCategory_CategoryNameAndEdition(category.categoryName, edition)){
            throw Exception("Category with this name already exists in this edition")
        }

        val categoryEdition = CategoryEdition(
            category = category,
            edition = edition,
            label = ""
        )
        return categoryEditionRepository.save(categoryEdition)
    }
}
