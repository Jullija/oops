package backend.categoryEdition

import backend.categories.Categories
import backend.edition.Edition
import backend.levels.Levels
import backend.users.Users
import jakarta.persistence.*

@Entity
@Table(name = "category_edition")
class CategoryEdition(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_edition_id")
    val categoryEditionId: Long = 0,

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    var category: Categories,

    @ManyToOne
    @JoinColumn(name = "edition_id", referencedColumnName = "edition_id")
    var edition: Edition,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,
) {
    constructor() : this(
        category = Categories(),
        edition = Edition(),
        label = ""
    )
}
