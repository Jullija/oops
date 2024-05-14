package backend.categories

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class CategoriesConfiguration {

    @Bean
    fun categoriesCommandLineRunner(categoryRepository: CategoryRepository):CommandLineRunner{
        return CommandLineRunner {args->
            if (categoryRepository.count() == 0L){
                CategoriesEnum.values().forEach {
                    val category = Categories(categoryName = it.name)
                    categoryRepository.save(category)
                }

            }
        }
    }
}