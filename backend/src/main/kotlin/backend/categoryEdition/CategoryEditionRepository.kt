package backend.categoryEdition

import backend.categories.Categories
import backend.edition.Edition
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryEditionRepository: JpaRepository<CategoryEdition, Long> {
    fun existsByCategory_CategoryNameAndEdition(category_categoryName: String, edition: Edition): Boolean

    fun existsByCategoryAndEdition(category: Categories, edition: Edition): Boolean

    fun deleteByCategoryAndEdition(category: Categories, edition: Edition)

    fun findByCategoryAndEdition(category: Categories, edition: Edition): List<CategoryEdition>
}
