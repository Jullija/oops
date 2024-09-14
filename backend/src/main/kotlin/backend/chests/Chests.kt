package backend.chests

import backend.edition.Edition
import backend.files.FileEntity
import backend.utils.HasImageFile
import jakarta.persistence.*

@Entity
@Table(name = "chests")
class Chests(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chest_id")
    val chestId: Long = 0,

    @Column(name = "type", nullable = false)
    var chestType: String,

    @Column(name="active", nullable = false)
    var active: Boolean = true,

    @Column(name = "label", nullable = false, length = 256)
    var label: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_file_id")
    override var imageFile: FileEntity? = null,
) : HasImageFile {
    constructor() : this(
        chestType = "",
        label = "",
        edition = Edition()
    )
}
