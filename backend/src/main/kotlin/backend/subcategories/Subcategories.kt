package backend.subcategories

import backend.categories.Categories
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

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    var category: Categories
) {
    constructor() : this(
        subcategoryName = "",
        category = Categories()
    )
}
