package backend.subcategories

import backend.categories.CategoryRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class SubcategoriesConfiguration {
    @Bean
    fun subcategoriesCommandLineRunner(subcategoriesRepository: SubcategoriesRepository, categoryRepository: CategoryRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (subcategoriesRepository.count() == 0L){
                val categories = categoryRepository.findAll()
                categories.forEach { category ->
                    val subcategories = when (category.categoryName) {
                        "LABORATORIA" -> listOf(
                            Subcategories(subcategoryName = "lab1", category = category),
                            Subcategories(subcategoryName = "lab2", category = category)
                        )
                        "KARTKÓWKI" -> listOf(
                            Subcategories(subcategoryName = "kart1", category = category),
                            Subcategories(subcategoryName = "kart22", category = category)
                        )
                        "PROJEKT" -> listOf(
                            Subcategories(subcategoryName = "mile1", category = category),
                            Subcategories(subcategoryName = "mile2", category = category)
                        )
                        "EVENT" ->listOf(
                            Subcategories(subcategoryName = "gitowe dziady", category = category),
                            Subcategories(subcategoryName = "egzamin inzynierski", category = category)
                        )

                        else -> listOf(
                            Subcategories(subcategoryName = "${category.categoryName} Subcategory 1", category = category),
                            )
                    }

                    subcategoriesRepository.saveAll(subcategories)
            }
        }
    }
}}