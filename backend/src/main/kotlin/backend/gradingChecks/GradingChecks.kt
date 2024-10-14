package backend.gradingChecks

import backend.categories.Categories
import backend.categoryEdition.CategoryEdition
import backend.edition.Edition
import backend.levels.Levels
import backend.userLevel.UserLevel
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "grading_checks")
class GradingChecks(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grading_check_id")
    val gradingCheckId: Long = 0,

    @Column(name = "end_of_labs_date", nullable = false)
    var endOfLabsDate: LocalDate,

    @ManyToOne
    @JoinColumn(name = "end_of_labs_levels_threshold", referencedColumnName = "level_id", nullable = false)
    var endOfLabsLevelsThreshold: Levels,

    @Column(name = "project_points_threshold", nullable = false)
    var projectPointsThreshold: Float,

    @ManyToOne
    @JoinColumn(name = "project_id", referencedColumnName = "category_id")
    var project: Categories,

    @ManyToOne
    @JoinColumn(name = "edition_id", referencedColumnName = "edition_id")
    var edition: Edition

) {
    constructor() : this(
        endOfLabsDate = LocalDate.now(),
        endOfLabsLevelsThreshold = Levels(),
        projectPointsThreshold = 0.0f,
        project = Categories(),
        edition = Edition()
    )
}
