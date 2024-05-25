//package backend.points
//
//import backend.categories.CategoriesEnum
//import backend.categories.CategoryRepository
//import backend.subcategories.SubcategoriesRepository
//import backend.users.UsersRepository
//import org.springframework.boot.CommandLineRunner
//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.core.annotation.Order
//
//@Configuration
//class PointsConfiguration {
//
//    @Bean
//    @Order(4)
//    fun pointsCommandLineRunner(pointsRepository: PointsRepository, usersRepository: UsersRepository, subcategoriesRepository: SubcategoriesRepository, categoryRepository: CategoryRepository):CommandLineRunner{
//        return CommandLineRunner { args ->
//            if (pointsRepository.count() == 0L){
//                val category = categoryRepository.findByCategoryName(CategoriesEnum.LABORATORIA)
//                val subcategory = subcategoriesRepository.findBySubcategoryNameAndCategory("lab1", category).firstOrNull()
//                val user = usersRepository.findByNick("Włodzimierz Biały")
//                val user2 = usersRepository.findByNick("Michał Idzik")
//                val points = subcategory?.let { Points(fromWho = user2, howMany = 10, subcategory= it, userId = user) }
//                pointsRepository.saveAll(listOf(points))
//            }
//        }
//    }
//}