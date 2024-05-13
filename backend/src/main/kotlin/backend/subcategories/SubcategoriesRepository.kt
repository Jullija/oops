package backend.subcategories

import backend.subcategories.Subcategories
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubcategoriesRepository : JpaRepository<Subcategories, Long> {
}