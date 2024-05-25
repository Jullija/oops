package backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Import
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication(scanBasePackages = [
	"backend.bonuses",
	"backend.categories",
	"backend.chestAward",
	"backend.chestHistory",
	"backend.chests",
	"backend.levels",
	"backend.points",
	"backend.subcategories",
	"backend.users",
	"backend.groups",
	"backend.graphql"
])
@EnableJpaAuditing
//@Import(BonusesConfiguration::class, CategoriesConfiguration::class, ChestAwardConfiguration::class, ChestHistoryConfiguration::class, ChestsConfiguration::class, PointsConfiguration::class, SubcategoriesConfiguration::class, UsersConfiguration::class, GroupsConfiguration::class)
class BackendApplication

fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)
}
