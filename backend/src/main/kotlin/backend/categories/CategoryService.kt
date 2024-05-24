package backend.categories
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class CategoryService(
    private val categoryRepository: CategoryRepository
) {

    @Transactional
    fun createCategory(categoryName: CategoriesEnum): Categories {
        val category = Categories(categoryName = categoryName)
        return categoryRepository.save(category)
    }
}