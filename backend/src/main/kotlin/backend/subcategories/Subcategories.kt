package backend.subcategories

import backend.categories.Categories
import jakarta.persistence.*

@Entity
@Table(name = "subcategories")
class Subcategories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val subcategoryId: Long = 0,

    @Column(name = "subcategoryName", nullable = false)
    var subcategoryName: String,

    @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "categoryId")
    var category: Categories
) {

    constructor() : this(
        subcategoryName = "",
        category = Categories()
    )
}
