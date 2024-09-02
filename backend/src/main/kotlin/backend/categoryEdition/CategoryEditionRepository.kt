package backend.categoryEdition

import backend.edition.Edition
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryEditionRepository: JpaRepository<CategoryEdition, Long> {
    fun existsByCategory_CategoryNameAndEdition(category_categoryName: String, edition: Edition): Boolean
}
