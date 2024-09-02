package backend.categories

import backend.categoryEdition.CategoryEdition
import backend.userLevel.UserLevel
import jakarta.persistence.*

@Entity
@Table(name = "categories")
class Categories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    val categoryId: Long = 0,

    @Column(name = "category_name", nullable = false, length = 256)
    var categoryName: String,

    @Column(name = "can_add_points", nullable = false)
    var canAddPoints: Boolean = true,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    val categoryEdition: Set<CategoryEdition> = HashSet(),
) {
    constructor() : this(
        categoryName = "LABORATORY",
        label = ""
    )
}
