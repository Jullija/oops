package backend.chestAward

import backend.chests.ChestsRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ChestAwardConfiguration {
    @Bean
    fun chestAwardCommandLineRunner(chestAwardRepository: ChestAwardRepository, chestsRepository: ChestsRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (chestAwardRepository.count() == 0L){
                val chests = chestsRepository.findAll()
                chests.forEach {chest ->
                    val chestAwards = when (chest.type){
                        "ZŁOTA" -> listOf(
                            ChestAward(chestId = chest, name = "marchewka", bonus = 10),
                            ChestAward(chestId = chest, name = "weterynarz", bonus = 20)
                        )
                        "SREBRNA" -> listOf(
                            ChestAward(chestId = chest, name = "marchewka", bonus = 10),
                            ChestAward(chestId = chest, name = "weterynarz", bonus = 20)
                        )
                        "BRĄZOWA" -> listOf(
                            ChestAward(chestId = chest, name = "marchewka", bonus = 5),
                        )
                        else -> listOf(
                            ChestAward(chestId = chest, name = "ups", bonus = 0)
                        )

                    }
                    chestAwardRepository.saveAll(chestAwards)

                }
            }
        }
    }
}