//package backend.chests
//
//import backend.categories.Categories
//import backend.categories.CategoriesEnum
//import org.springframework.boot.CommandLineRunner
//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.context.annotation.DependsOn
//import org.springframework.core.annotation.Order
//
//@Configuration
//class ChestsConfiguration {
//    @Bean
//    @Order(1)
//    fun chestsCommandLineRunner(chestsRepository: ChestsRepository):CommandLineRunner{
//        return CommandLineRunner { args ->
//            if (chestsRepository.count() == 0L){
//                ChestsType.values().forEach {
//                    val chest = Chests(type = it.name)
//                    chestsRepository.save(chest)
//                }
//            }
//        }
//    }
//}