package backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.context.annotation.PropertySource

@SpringBootApplication(
	scanBasePackages = [
		"backend.award",
		"backend.awardEdition",
		"backend.bonuses",
		"backend.categories",
		"backend.categoryEdition",
		"backend.chestAward",
		"backend.chestHistory",
		"backend.chests",
		"backend.edition",
		"backend.files",
		"backend.firebase",
		"backend.graphql",
		"backend.groups",
		"backend.levels",
		"backend.points",
		"backend.subcategories",
		"backend.userGroups",
		"backend.userLevel",
		"backend.users",
		"backend.utils",
		"backend.weekdays"
	]
)

@EnableJpaAuditing
@PropertySource("classpath:application-secrets.properties")
class BackendApplication

fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)
}
