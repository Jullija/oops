package backend.repository

import backend.entity.Subcategories
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubcategoriesRepository : JpaRepository<Subcategories, Long> {
}