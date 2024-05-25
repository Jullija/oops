//package backend.bonuses
//
//import backend.chestAward.ChestAwardRepository
//import backend.chestHistory.ChestHistoryRepository
//import backend.chests.ChestsRepository
//import backend.points.PointsRepository
//import backend.users.UsersRepository
//import org.springframework.boot.CommandLineRunner
//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.core.annotation.Order
//
//@Configuration
//class BonusesConfiguration {
//
//    @Bean
//    @Order(4)
//    fun bonusesCommandLineRunner(bonusesRepository: BonusesRepository, chestAwardRepository: ChestAwardRepository, chestHistoryRepository: ChestHistoryRepository, pointsRepository: PointsRepository, chestsRepository: ChestsRepository, usersRepository: UsersRepository): CommandLineRunner{
//        return CommandLineRunner { args ->
//            if (bonusesRepository.count() == 0L){
//                val chest = chestsRepository.findByType("ZŁOTA")
//                val chestAward = chestAwardRepository.findByNameAndChestId("marchewka", chest)[0]
//                val user = usersRepository.findByNick("Włodzimierz Biały")
//                val user2 = usersRepository.findByNick("Michał Idzik")
//                val chestHistory = chestHistoryRepository.findByUserAndChest(user2, chest)[0]
//                val subcategory = chestHistory.subcategory
//                val points = pointsRepository.findByUserIdAndFromWhoAndSubcategory(user, user2, subcategory)
//
//
//                val bonus = Bonuses(points = points[0], subcategory = subcategory, award = chestAward)
//                bonusesRepository.saveAll(listOf(bonus))
//
//            }
//        }
//    }
//}