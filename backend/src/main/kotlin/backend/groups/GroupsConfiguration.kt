package backend.groups

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order

@Configuration
class GroupsConfiguration {
    @Bean
    @Order(1)
    fun groupsCommandLineRunner(groupsRepository: GroupsRepository): CommandLineRunner {
        return CommandLineRunner { args ->
            val existingGroupNames = groupsRepository.findAll().map { it.groupName }.toSet()
            val groups = listOf(
                Groups(groupName = "Pierwsza", groupYear = 2024),
                Groups(groupName = "Druga", groupYear = 2024),
                Groups(groupName = "Trzecia", groupYear = 2022),
                Groups(groupName = "Czwarta", groupYear = 2025) // Example new group
            )
            val newGroups = groups.filter { it.groupName !in existingGroupNames }
            if (newGroups.isNotEmpty()) {
                groupsRepository.saveAll(newGroups)
            }
        }
    }
}
