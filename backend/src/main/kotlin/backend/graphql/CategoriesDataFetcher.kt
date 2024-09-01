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
}
