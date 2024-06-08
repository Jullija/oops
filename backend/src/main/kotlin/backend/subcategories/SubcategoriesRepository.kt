package backend.subcategories

import backend.categories.Categories
import backend.edition.Edition
import jakarta.persistence.TypedQuery
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface SubcategoriesRepository : JpaRepository<Subcategories, Long> {
    fun findBySubcategoryNameAndCategory(subcategoryName:String, category: Categories) : List<Subcategories>
    fun findFirstByCategoryAndSubcategoryIdGreaterThanOrderBySubcategoryIdAsc(category: Categories, subcategoryId: Long): Optional<Subcategories>
    fun findFirstByCategoryOrderBySubcategoryIdAsc(category: Categories): Optional<Subcategories>
    fun findFirstByCategoryAndEditionOrderBySubcategoryIdAsc(category: Categories, edition: Edition): Optional<Subcategories>

}