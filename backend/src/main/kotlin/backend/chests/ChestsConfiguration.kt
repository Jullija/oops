package backend.chests

import backend.categories.Categories
import backend.categories.CategoriesEnum
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ChestsConfiguration {
    @Bean
    fun chestsCommandLineRunner(chestsRepository: ChestsRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (chestsRepository.count() == 0L){
                ChestsType.values().forEach {
                    val chest = Chests(type = it.name)
                    chestsRepository.save(chest)
                }
            }
        }
    }
}