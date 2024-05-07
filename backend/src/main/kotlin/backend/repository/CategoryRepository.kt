package backend.repository

import backend.entity.Categories
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository: JpaRepository<Categories, Long> {
}