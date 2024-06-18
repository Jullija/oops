package backend.points

import backend.edition.Edition
import backend.subcategories.Subcategories
import backend.users.Users
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PointsRepository : JpaRepository<Points, Long> {
    fun findByStudentAndTeacherAndSubcategory(studentId: Users, teacherId: Users, subcategoryId: Subcategories) : List<Points>
    fun findAllByStudentAndSubcategory_Edition(student: Users, edition: Edition): List<Points>
    fun findAllByStudent(student: Users): List<Points>
    fun findAllByStudentAndSubcategory_SubcategoryId(student: Users, subcategoryId: Long): List<Points>
}
