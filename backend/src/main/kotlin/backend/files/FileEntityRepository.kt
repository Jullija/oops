package backend.files

import org.springframework.data.jpa.repository.JpaRepository

interface FileEntityRepository : JpaRepository<FileEntity, Long>{
    fun findAllByFileType(fileType: String): List<FileEntity>
    fun findByFileId(fileId: Long): FileEntity?
    fun findAllByFileTypeIn(fileTypes: List<String>): List<FileEntity>
}
