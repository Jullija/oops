package backend.graphql

import backend.award.AwardRepository
import backend.bonuses.Bonuses
import backend.bonuses.BonusesRepository
import backend.points.Points
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.chestAward.ChestAwardRepository
import backend.chestHistory.ChestHistoryRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class BonusesMutation {

    @Autowired
    lateinit var bonusesRepository: BonusesRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var awardRepository: AwardRepository

    @Autowired
    lateinit var chestHistoryRepository: ChestHistoryRepository


    @DgsMutation
    @Transactional
    fun createBonus(@InputArgument studentId: Long,
                    @InputArgument teacherId: Long,
                    @InputArgument howMany: Long,
                    @InputArgument subcategoryId: Long,
                    @InputArgument awardId: Long): Bonuses {
        val student = usersRepository.findById(studentId)
            .orElseThrow { IllegalArgumentException("Student not found") }
        val teacher = usersRepository.findById(teacherId)
            .orElseThrow { IllegalArgumentException("Teacher not found") }
        val subcategory = subcategoriesRepository.findById(subcategoryId)
            .orElseThrow { IllegalArgumentException("Subcategory not found") }
        val award = awardRepository.findById(awardId)
            .orElseThrow { IllegalArgumentException("Award not found") }

        val chestHistory = chestHistoryRepository.findById(awardId)
            .orElseThrow { IllegalArgumentException("Award not found") }

        // Create Points record
        val points = Points(
            student = student,
            teacher = teacher,
            value = howMany,
            subcategory = subcategory,
            label = ""
        )
        pointsRepository.save(points)

        // Create Bonuses record
        val bonus = Bonuses(
            points = points,
            award = award,
            subcategory = subcategory,
            label ="",
            chestHistory = chestHistory
        )
        return bonusesRepository.save(bonus)
    }
}
