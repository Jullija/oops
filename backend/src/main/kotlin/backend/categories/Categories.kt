package backend.categories

import jakarta.persistence.*

@Entity
@Table(name = "categories")
class Categories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoryId")
    val categoryId: Long = 0,

    @Column(name = "categoryName", nullable = false)
    var categoryName: String
) {
    constructor() : this(
        categoryName = CategoriesEnum.LABORATORIA.toString()
    )
}
