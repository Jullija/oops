package backend.files

import jakarta.persistence.*

@Entity
@Table(name = "files")
data class FileEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val fileId: Long = 0,

    @Column(name = "path_to_file", nullable = false)
    val pathToFile: String,

    @Column(name = "file_name", nullable = false)
    val fileName: String,

    @Column(name = "file_type", nullable = false)
    val fileType: String,

    @Column(name = "label", nullable = false, length = 256)
    var label: String = "",
) {
    constructor() : this(
        pathToFile = "",
        fileName = "",
        fileType = "",
        label = ""
    )
}
