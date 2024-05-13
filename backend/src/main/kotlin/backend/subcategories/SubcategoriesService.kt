package backend.subcategories

import backend.categories.Categories
import jakarta.persistence.EntityManager
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class SubcategoryService(
    private val entityManager: EntityManager
) {
    @Transactional
    fun createSubcategory(subcategoryName: String, category: Categories): Subcategories {
        val subcategory = Subcategories(subcategoryName = subcategoryName, category = category)
        entityManager.persist(subcategory)
        return subcategory
    }

    @Transactional
    fun updateSubcategory(subcategoryId: Long, newSubcategoryName: String, category: Categories): Subcategories? {
        val subcategory = entityManager.find(Subcategories::class.java, subcategoryId)
        if (subcategory != null) {
            subcategory.subcategoryName = newSubcategoryName
            subcategory.category = category
            entityManager.merge(subcategory)
        }
        return subcategory
    }

    @Transactional
    fun findSubcategoryById(subcategoryId: Long): Subcategories? {
        return entityManager.find(Subcategories::class.java, subcategoryId)
    }

    @Transactional
    fun deleteSubcategory(subcategoryId: Long): Boolean {
        val subcategory = entityManager.find(Subcategories::class.java, subcategoryId)
        if (subcategory != null) {
            entityManager.remove(subcategory)
            return true
        }
        return false
    }
}
