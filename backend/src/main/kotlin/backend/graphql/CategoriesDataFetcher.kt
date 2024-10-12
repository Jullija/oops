package backend.graphql

import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.utils.UserMapper
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDate

@DgsComponent
class CategoriesDataFetcher {
    @Autowired
    private lateinit var userMapper: UserMapper

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @DgsMutation
    @Transactional
    fun addCategory(@InputArgument categoryName: String, @InputArgument canAddPoints: Boolean,
                    @InputArgument lightColor: String = "#FFFFFF", @InputArgument darkColor: String = "#000000",
                 @InputArgument label: String = ""): Categories {
        val currentUser = userMapper.getCurrentUser()

        val categoriesWithSameName = categoriesRepository.findAllByCategoryName(categoryName)
        if (categoriesWithSameName.any { it.canAddPoints == canAddPoints }) {
            throw IllegalArgumentException("Category with this name and canAddPoints already exists")
        }
        if (!isValidHexColor(lightColor)) {
            throw IllegalArgumentException("Invalid light color")
        }
        if (!isValidHexColor(darkColor)) {
            throw IllegalArgumentException("Invalid dark color")
        }
        val category = Categories(
            categoryName = categoryName,
            canAddPoints = canAddPoints,
            lightColor = lightColor,
            darkColor = darkColor,
            label = label
        )
        return categoriesRepository.save(category)
    }

    @DgsMutation
    @Transactional
    fun removeCategory(@InputArgument categoryId: Long): Boolean {
        val currentUser = userMapper.getCurrentUser()

        val category = categoriesRepository.findById(categoryId)
            .orElseThrow { IllegalArgumentException("Invalid category ID") }
        if (category.categoryEdition.any { categoryEdition -> categoryEdition.edition.endDate.isBefore(LocalDate.now()) }) {
            throw IllegalArgumentException("Category is already in an edition that has ended")
        }
        if (category.categoryEdition.any { categoryEdition -> categoryEdition.edition.startDate.isBefore(LocalDate.now()) }) {
            throw IllegalArgumentException("Category is already in an edition that has started")
        }
        categoriesRepository.delete(category)
        return true
    }

    @DgsMutation
    @Transactional
    fun editCategory(
        @InputArgument categoryId: Long,
        @InputArgument categoryName: String?,
        @InputArgument canAddPoints: Boolean?,
        @InputArgument lightColor: String?,
        @InputArgument darkColor: String?,
        @InputArgument label: String?
    ): Categories {
        val currentUser = userMapper.getCurrentUser()

        val category = categoriesRepository.findById(categoryId)
            .orElseThrow { IllegalArgumentException("Invalid category ID") }

        if (categoryName != null || canAddPoints != null) {
            if (category.categoryEdition.any { categoryEdition -> categoryEdition.edition.endDate.isBefore(LocalDate.now()) }) {
                throw IllegalArgumentException("Category is already in an edition that has ended")
            }
            if (category.categoryEdition.any { categoryEdition -> categoryEdition.edition.startDate.isBefore(LocalDate.now()) }) {
                throw IllegalArgumentException("Category is already in an edition that has started")
            }
        }
        lightColor?.let {
            if (!isValidHexColor(it)) {
                throw IllegalArgumentException("Invalid light color")
            }
            category.lightColor = it
        }
        darkColor?.let {
            if (!isValidHexColor(it)) {
                throw IllegalArgumentException("Invalid dark color")
            }
            category.darkColor = it
        }
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

    private fun isValidHexColor(color: String): Boolean {
        val hexColorPattern = "^#(?:[0-9a-fA-F]{3}){1,2}$".toRegex()
        return hexColorPattern.matches(color)
    }
}
