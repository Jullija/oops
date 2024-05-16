package backend.chestHistory

import backend.categories.CategoriesEnum
import backend.categories.CategoryRepository
import backend.chests.ChestsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order

@Configuration
class ChestHistoryConfiguration {

    @Bean
    @Order(3)
    fun chestHistoryCommandLineRunner(chestHistoryRepository: ChestHistoryRepository, chestsRepository: ChestsRepository, subcategoriesRepository: SubcategoriesRepository, usersRepository: UsersRepository, categoryRepository: CategoryRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (chestHistoryRepository.count() == 0L){

                val chest = chestsRepository.findByType("ZŁOTA")
                val category = categoryRepository.findByCategoryName(CategoriesEnum.LABORATORIA)
                val subcategory = subcategoriesRepository.findBySubcategoryNameAndCategory("lab1", category).firstOrNull()

                val user = usersRepository.findByNick("Michał Idzik")


                val chestHistory = subcategory?.let { ChestHistory(user = user, chest = chest, subcategory = it) }
                chestHistoryRepository.saveAll(listOf(chestHistory))
            }
        }
    }
}