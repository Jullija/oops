package backend

import backend.bonuses.BonusesConfiguration
import backend.categories.CategoriesConfiguration
import backend.chestAward.ChestAwardConfiguration
import backend.chestHistory.ChestHistoryConfiguration
import backend.chestAward.ChestAwardRepository
import backend.chests.Chests
import backend.chests.ChestsConfiguration
import backend.points.PointsConfiguration
import backend.subcategories.SubcategoriesConfiguration
import backend.users.UsersConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Import

@SpringBootApplication(scanBasePackages = [
	"backend.bonuses",
	"backend.categories",
	"backend.chestAward",
	"backend.chestHistory",
	"backend.chests",
	"backend.levels",
	"backend.points",
	"backend.subcategories",
	"backend.users"
])
@Import(BonusesConfiguration::class, CategoriesConfiguration::class, ChestAwardConfiguration::class, ChestHistoryConfiguration::class, ChestsConfiguration::class, PointsConfiguration::class, SubcategoriesConfiguration::class, UsersConfiguration::class)
class BackendApplication

fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)
}
