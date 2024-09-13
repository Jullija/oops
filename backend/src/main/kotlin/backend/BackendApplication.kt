package backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication(scanBasePackages = [
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
	"backend.graphql",
	"backend.groups",
	"backend.levels",
	"backend.points",
	"backend.subcategories",
	"backend.userGroups",
	"backend.userLevel",
	"backend.users",
	"backend.weekdays"
])
@EnableJpaAuditing
//@Import(BonusesConfiguration::class, CategoriesConfiguration::class, ChestAwardConfiguration::class, ChestHistoryConfiguration::class, ChestsConfiguration::class, PointsConfiguration::class, SubcategoriesConfiguration::class, UsersConfiguration::class, GroupsConfiguration::class)
class BackendApplication

fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)
}
