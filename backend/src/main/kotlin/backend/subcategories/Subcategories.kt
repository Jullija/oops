package backend.subcategories

import backend.categories.Categories
import backend.edition.Edition
import jakarta.persistence.*
import java.math.BigDecimal

@Entity
@Table(name = "subcategories")
class Subcategories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategory_id")
    val subcategoryId: Long = 0,

    @Column(name = "subcategory_name", nullable = false)
    var subcategoryName: String,

    @Column(name = "max_points", nullable = false, precision = 10, scale = 2)
    var maxPoints: BigDecimal = BigDecimal.ZERO,

    @Column(name = "ordinal_number", nullable = false)
    var ordinalNumber: Int = 1,

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    var category: Categories,

    @ManyToOne
    @JoinColumn(name = "edition_id", referencedColumnName = "edition_id", nullable = true)
    var edition: Edition? = null,

    @Column(name = "label", nullable = false, length = 256)
    var label: String
) {
    constructor() : this(
        subcategoryName = "",
        maxPoints = BigDecimal.ZERO,
        ordinalNumber = 1,
        category = Categories(),
        edition = null,
        label = ""
    )
}
