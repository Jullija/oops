package backend.users

import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order


@Configuration
class UsersConfiguration {
    @Bean
    @Order(1)
    fun usersCommandLineRunner(usersRepository: UsersRepository):CommandLineRunner{
        return CommandLineRunner { args ->
            if (usersRepository.count() == 0L){
                var users = listOf(
                    Users(nick = "Michał Idzik", role = UsersRoles.COORDINATOR),
                    Users(nick = "Włodzimierz Biały", role = UsersRoles.STUDENT),
                    Users(nick = "Michał Scott", role = UsersRoles.TEACHER),
                    Users(nick = "Jeremiasz Różowy", role = UsersRoles.STUDENT)
                )
                usersRepository.saveAll(users)
            }

        }
    }
}