package backend.groups

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order

@Configuration
class GroupsConfiguration {
    @Bean
    @Order(1)
    fun groupsCommandLineRunner(groupsRepository: GroupsRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (groupsRepository.count() == 0L){
                val groups = listOf(
                    Groups(groupName = "Pierwsza", groupYear = 2024),
                    Groups(groupName = "Druga", groupYear = 2024)
                )
                groupsRepository.saveAll(groups)
            }
        }
    }

}