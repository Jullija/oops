package backend.categories

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

    @Column(name = "label", nullable = false, length = 256)
    var label: String
) {
    constructor() : this(
        categoryName = "LABORATORY",
        label = ""
    )
}
