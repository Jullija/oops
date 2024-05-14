package backend.chestHistory

import backend.chests.ChestsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ChestHistoryConfiguration {

    @Bean
    fun chestHistoryCommandLineRunner(chestHistoryRepository: ChestHistoryRepository, chestsRepository: ChestsRepository, subcategoriesRepository: SubcategoriesRepository, usersRepository: UsersRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (chestHistoryRepository.count() == 0L){
                val chest = chestsRepository.findById(1).orElseThrow { IllegalArgumentException("Chest not found") }
                val subcategory = subcategoriesRepository.findById(1).orElseThrow { IllegalArgumentException("Subcategory not found") }
                val user = usersRepository.findById(1).orElseThrow { IllegalArgumentException("User not found") }

                val chestHistory = ChestHistory(userId = user, chestId = chest, subcategoryId = subcategory)
                chestHistoryRepository.saveAll(listOf(chestHistory))
            }
        }
    }
}