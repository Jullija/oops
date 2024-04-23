package backend.entity

import jakarta.persistence.*

@Entity
@Table(name = "subcategories")
class Subcategories(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val subcategoryId: Long = 0,

    @Column(nullable = false)
    var subcategoryName: String,

    @OneToOne
    @JoinColumn(name = "category_id", referencedColumnName = "categoryId")
    var category: Categories
) {

    constructor() : this(
        subcategoryName = "",
        category = Categories()
    )
}
