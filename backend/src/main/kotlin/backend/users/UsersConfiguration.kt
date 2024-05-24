package backend.users

import backend.groups.GroupsRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order


@Configuration
class UsersConfiguration {
//    @Bean
//    @Order(2)
//    fun usersCommandLineRunner(usersRepository: UsersRepository, groupsRepository: GroupsRepository):CommandLineRunner{
//        return CommandLineRunner { args ->
//            if (usersRepository.count() == 0L){
//                val group1 = groupsRepository.findByGroupNameAndGroupYear("Pierwsza", 2024)
//                val group2 = groupsRepository.findByGroupNameAndGroupYear("Druga", 2024)
//                var users = listOf(
//                    Users(nick = "Michał Idzik", role = UsersRoles.COORDINATOR, groups = setOf(group1, group2)),
//                    Users(nick = "Włodzimierz Biały", role = UsersRoles.STUDENT, groups = setOf(group1)),
//                    Users(nick = "Michał Scott", role = UsersRoles.TEACHER, groups = setOf(group2)),
//                    Users(nick = "Jeremiasz Różowy", role = UsersRoles.STUDENT, groups = setOf(group2))
//                )
//                usersRepository.saveAll(users)
//            }
//            println("GHJDBFJHGDFHGJDBGHVFDGBNCVDFBCNDJFBUKD")
//            println(usersRepository.findByNick("Michał Idzik").groups)
//
//        }
//    }
}