package backend.points

import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class PointsConfiguration {

    @Bean
    fun pointsCommandLineRunner(pointsRepository: PointsRepository, usersRepository: UsersRepository, subcategoriesRepository: SubcategoriesRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (pointsRepository.count() == 0L){
                val subcategory = subcategoriesRepository.findById(1).orElseThrow { IllegalArgumentException("Subcategory not found") }
                val user = usersRepository.findById(1).orElseThrow { IllegalArgumentException("User not found") }
                val user2 = usersRepository.findById(2).orElseThrow { IllegalArgumentException("User not found") }
                val points = Points(fromWho = user2, howMany = 10, subcategory=subcategory, userId = user)
                pointsRepository.saveAll(listOf(points))
            }
        }
    }
}