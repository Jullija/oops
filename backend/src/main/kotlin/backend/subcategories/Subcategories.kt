package backend.subcategories

import backend.categories.Categories
import backend.edition.Edition
import jakarta.persistence.*

@Entity
@Table(name = "subcategories")
class Subcategories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategory_id")
    val subcategoryId: Long = 0,

    @Column(name = "subcategory_name", nullable = false)
    var subcategoryName: String,

    @Column(name = "max_points", nullable = false)
    var maxPoints: Float = 0f,

    @Column(name = "ordinal_number", nullable = false)
    var ordinalNumber: Int = 1,

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    var category: Categories,

    @ManyToOne
    @JoinColumn(name = "edition_id", referencedColumnName = "edition_id")
    var edition: Edition,

    @Column(name = "label", nullable = false, length = 256)
    var label: String
) {
    constructor() : this(
        subcategoryName = "",
        maxPoints = 0f,
        ordinalNumber = 1,
        category = Categories(),
        edition = Edition(),
        label = ""
    )
}
