package backend.graphql

import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.categoryEdition.CategoryEditionRepository
import backend.edition.Edition
import backend.edition.EditionRepository
import backend.gradingChecks.GradingChecks
import backend.gradingChecks.GradingChecksRepository
import backend.levels.Levels
import backend.levels.LevelsRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import backend.users.Users
import backend.users.UsersRoles
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.format.DateTimeParseException
import kotlin.math.min

@DgsComponent
class GradingChecksDataFetcher {

    @Autowired
    private lateinit var levelsRepository: LevelsRepository

    @Autowired
    private lateinit var editionRepository: EditionRepository

    @Autowired
    private lateinit var categoryEditionRepository: CategoryEditionRepository

    @Autowired
    lateinit var usersRepository: UsersRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var categoriesRepository: CategoriesRepository

    @Autowired
    lateinit var gradingChecksRepository: GradingChecksRepository

    @DgsMutation
    @Transactional
    fun addGradingCheck(@InputArgument editionId: Long, @InputArgument endOfLabsDate: String,
                        @InputArgument endOfLabsLevelsThreshold: Long, @InputArgument projectPointsThreshold: Float,
                        @InputArgument projectId: Long, @InputArgument checkDates: Boolean = true): GradingChecks {
        val edition = editionRepository.findById(editionId)
            .orElseThrow { IllegalArgumentException("Invalid edition ID") }

        if (gradingChecksRepository.existsByEdition(edition)) {
            throw IllegalArgumentException("Grading checks for edition ${edition.editionName} already exist")
        }

        val endOfLabsDateParsed = LocalDate.parse(endOfLabsDate)
        if (checkDates) {

            if (edition.endDate.isBefore(LocalDate.now())){
                throw IllegalArgumentException("Edition has already ended")
            }
            if (endOfLabsDateParsed.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("End of labs date must be in the future")
            }
        }

        if (endOfLabsDateParsed.isBefore(edition.startDate) || endOfLabsDateParsed.isAfter(edition.endDate)) {
            throw IllegalArgumentException("End of labs date must be between ${edition.startDate} and ${edition.endDate}")
        }

        val endOfLabsLevelsThresholdLevel = levelsRepository.findById(endOfLabsLevelsThreshold)
            .orElseThrow { IllegalArgumentException("Invalid level ID") }

        val project = categoriesRepository.findById(projectId)
            .orElseThrow { IllegalArgumentException("Invalid category ID") }

        if (categoryEditionRepository.findByCategoryAndEdition(project, edition).isEmpty()) {
            throw IllegalArgumentException("Category ${project.categoryName} is not part of edition ${edition.editionName}")
        }

        if (projectPointsThreshold < 0) {
            throw IllegalArgumentException("Project points threshold cannot be negative")
        }

        val gradingCheck = GradingChecks(
            endOfLabsDate = endOfLabsDateParsed,
            endOfLabsLevelsThreshold = endOfLabsLevelsThresholdLevel,
            projectPointsThreshold = projectPointsThreshold,
            project = project,
            edition = edition
        )

        return gradingChecksRepository.save(gradingCheck)
    }

    @DgsMutation
    @Transactional
    fun editGradingCheck(
        @InputArgument gradingCheckId: Long,
        @InputArgument endOfLabsDate: String?,
        @InputArgument endOfLabsLevelsThreshold: Long?,
        @InputArgument projectPointsThreshold: Float?,
        @InputArgument projectId: Long?
    ): GradingChecks {
        val gradingCheck = gradingChecksRepository.findById(gradingCheckId)
            .orElseThrow { IllegalArgumentException("Grading check not found") }

        endOfLabsDate?.let {
            val endOfLabsDateParsed = try {
                LocalDate.parse(it)
            } catch (e: DateTimeParseException) {
                throw IllegalArgumentException("Invalid date format for endOfLabsDate")
            }

            val edition = gradingCheck.edition

            if (edition.endDate.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("Edition has already ended")
            }
            if (endOfLabsDateParsed.isBefore(LocalDate.now())) {
                throw IllegalArgumentException("End of labs date must be in the future")
            }

            if (endOfLabsDateParsed.isBefore(edition.startDate) || endOfLabsDateParsed.isAfter(edition.endDate)) {
                throw IllegalArgumentException("End of labs date must be between ${edition.startDate} and ${edition.endDate}")
            }

            gradingCheck.endOfLabsDate = endOfLabsDateParsed
        }

        endOfLabsLevelsThreshold?.let {
            val level = levelsRepository.findById(it)
                .orElseThrow { IllegalArgumentException("Invalid level ID") }
            gradingCheck.endOfLabsLevelsThreshold = level
        }

        projectPointsThreshold?.let {
            if (it < 0) {
                throw IllegalArgumentException("Project points threshold cannot be negative")
            }

            gradingCheck.projectPointsThreshold = it
        }

        projectId?.let {
            val project = categoriesRepository.findById(it)
                .orElseThrow { IllegalArgumentException("Invalid category ID") }

            if (categoryEditionRepository.findByCategoryAndEdition(project, gradingCheck.edition).isEmpty()) {
                throw IllegalArgumentException("Category ${project.categoryName} is not part of edition ${gradingCheck.edition.editionName}")
            }

            gradingCheck.project = project
        }

        return gradingChecksRepository.save(gradingCheck)
    }

    @DgsMutation
    @Transactional
    fun removeGradingCheck(@InputArgument gradingCheckId: Long): Boolean {
        val gradingCheck = gradingChecksRepository.findById(gradingCheckId)
            .orElseThrow { IllegalArgumentException("Grading check not found") }

        if (gradingCheck.edition.endDate.isBefore(LocalDate.now())) {
            throw IllegalArgumentException("Edition has already ended")
        }

        gradingChecksRepository.delete(gradingCheck)
        return true
    }

}

