package backend.categories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoriesRepository: JpaRepository<Categories, Long> {
    fun findByCategoryName(categoryName:String) : Categories
}
