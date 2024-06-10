package backend.graphql

import backend.points.Points
import backend.points.PointsRepository
import backend.bonuses.BonusesRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.users.Users
import backend.users.UsersRepository
import backend.award.AwardType
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class PointsDataFetcher {

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var bonusRepository: BonusesRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @DgsMutation
    @Transactional
    fun addPointsMutation(@InputArgument studentId: Long, @InputArgument teacherId: Long, value: Long,
                          @InputArgument subcategoryId: Long): Points {
        val student = getUsers(studentId)
        val teacher = getUsers(teacherId)
        val subcategory = getSubcategory(subcategoryId)

        val points = Points(
            student = student,
            teacher = teacher,
            value = value,
            subcategory = subcategory,
            label = ""
        )
        val savedPoints = pointsRepository.save(points)


        val bonuses = bonusRepository.findByAward_AwardTypeAndPoints_Student(AwardType.MULTIPLICATIVE, student).filter{
            bonus -> bonus.points.subcategory.edition == subcategory.edition
        }

        bonuses.forEach { bonus ->
            bonus.updateMultiplicativePoints(bonusRepository, pointsRepository)
        }

        return savedPoints
    }

    private fun getUsers(userId: Long): Users {
        return usersRepository.findById(userId)
            .orElseThrow { IllegalArgumentException("Invalid user ID") }
    }

    private fun getSubcategory(subcategoryId: Long): Subcategories {
        return subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Invalid subcategory ID") }
    }
}
