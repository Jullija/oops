package backend.service
import backend.entity.Categories
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class CategoryService(
    private val entityManager: EntityManager
) {

    @Transactional
    fun createCategory(categoryName: String): Categories {
        val category = Categories(categoryName = categoryName)
        entityManager.persist(category)
        return category
    }
}