package backend.graphql

import backend.categories.Categories
import backend.categories.CategoriesRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class CategoriesDataFetcher {
    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @DgsMutation
    @Transactional
    fun addCategory(@InputArgument categoryName: String, @InputArgument canAddPoints: Boolean,
                 @InputArgument label: String = ""): Categories {
        val categoriesWithSameName = categoriesRepository.findAllByCategoryName(categoryName)
        if (categoriesWithSameName.any { it.canAddPoints == canAddPoints }) {
            throw IllegalArgumentException("Category with this name and canAddPoints already exists")
        }
        val category = Categories(
            categoryName = categoryName,
            canAddPoints = canAddPoints,
            label = label
        )
        return categoriesRepository.save(category)
    }

    @DgsMutation
    @Transactional
    fun removeCategory(@InputArgument categoryId: Long): Boolean {
        val category = categoriesRepository.findById(categoryId)
            .orElseThrow { IllegalArgumentException("Invalid category ID") }

        categoriesRepository.delete(category)
        return true
    }

    @DgsMutation
    @Transactional
    fun editCategory(
        @InputArgument categoryId: Long,
        @InputArgument categoryName: String?,
        @InputArgument canAddPoints: Boolean?,
        @InputArgument label: String?
    ): Categories {
        val category = categoriesRepository.findById(categoryId)
            .orElseThrow { IllegalArgumentException("Invalid category ID") }

        categoryName?.let {
            val categoriesWithSameName = categoriesRepository.findAllByCategoryName(it)
            if (categoriesWithSameName.any { existing -> existing.categoryId != categoryId && existing.canAddPoints == canAddPoints }) {
                throw IllegalArgumentException("Category with this name and canAddPoints already exists")
            }
            category.categoryName = it
        }

        canAddPoints?.let {
            category.canAddPoints = it
        }

        label?.let {
            category.label = it
        }

        return categoriesRepository.save(category)
    }
}
