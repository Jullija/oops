package backend.edition

import backend.categoryEdition.CategoryEdition
import backend.userLevel.UserLevel
import jakarta.persistence.*

@Entity
@Table(name = "edition")
class Edition(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "edition_id", nullable = false)
    val editionId: Long = 0,

    @Column(name = "name", nullable = false, length = 256)
    var editionName: String,

    @Column(name = "edition_year", nullable = false)
    var editionYear: Int,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @OneToMany(mappedBy = "edition", fetch = FetchType.LAZY)
    val userLevels: Set<UserLevel> = HashSet(),

    @OneToMany(mappedBy = "edition", fetch = FetchType.LAZY)
    val categoryEdition: Set<CategoryEdition> = HashSet(),
) {
    constructor() : this(
        editionName = "",
        editionYear = 0,
        label = ""
    )
}
