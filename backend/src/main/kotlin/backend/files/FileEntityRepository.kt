package backend.files

import org.springframework.data.jpa.repository.JpaRepository

interface FileEntityRepository : JpaRepository<FileEntity, Long>{
    fun findByFileId(fileId: Long): FileEntity?
}
