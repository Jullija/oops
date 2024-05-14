package backend.bonuses

import backend.chestAward.ChestAwardRepository
import backend.chestHistory.ChestHistoryRepository
import backend.points.PointsRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class BonusesConfiguration {

    @Bean
    fun bonusesCommandLineRunner(bonusesRepository: BonusesRepository, chestAwardRepository: ChestAwardRepository, chestHistoryRepository: ChestHistoryRepository, pointsRepository: PointsRepository): CommandLineRunner{
        return CommandLineRunner { args ->
            if (bonusesRepository.count() == 0L){
                val chestAward = chestAwardRepository.findById(1).orElseThrow { IllegalArgumentException("chestAward not found") }
                val chestHistory = chestHistoryRepository.findById(1).orElseThrow { IllegalArgumentException("chestHistory not found") }
                val subcategory = chestHistory.subcategoryId
                val points = pointsRepository.findById(1).orElseThrow { IllegalArgumentException("points not found") }

                val bonus = Bonuses(pointsId = points, subcategory = subcategory, awardId=chestAward)
                bonusesRepository.saveAll(listOf(bonus))

            }
        }
    }
}