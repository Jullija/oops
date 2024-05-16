package backend.categories

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.DependsOn
import org.springframework.core.annotation.Order

@Configuration
class CategoriesConfiguration {

    @Bean
    @Order(1)
    fun categoriesCommandLineRunner(categoryRepository: CategoryRepository):CommandLineRunner{
        return CommandLineRunner {args->
            if (categoryRepository.count() == 0L){
                CategoriesEnum.values().forEach {
                    val category = Categories(categoryName = it)
                    categoryRepository.save(category)
                }

            }
        }
    }
}