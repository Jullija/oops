package backend.subcategories

import backend.categories.Categories
import backend.categories.CategoriesEnum
import backend.chestAward.ChestAward
import backend.subcategories.Subcategories
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubcategoriesRepository : JpaRepository<Subcategories, Long> {
    fun findBySubcategoryNameAndCategory(subcategoryName:String, category: Categories) : List<Subcategories>
}