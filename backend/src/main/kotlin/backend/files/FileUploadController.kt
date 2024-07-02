package backend.files

import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
@RestController
@RequestMapping("/files")
@CrossOrigin(origins = ["http://localhost:5173"], allowedHeaders = ["*"])
class FileUploadController(
    private val fileUploadService: FileUploadService,
    private val fileRetrievalService: FileRetrievalService
) {

    @PostMapping("/upload")
    fun uploadFile(@RequestParam("file") file: MultipartFile, @RequestParam("fileType") fileType: String): FileEntity {
        return fileUploadService.saveFile(file, fileType)
    }

    @GetMapping("/{fileId}")
    fun getFile(@PathVariable fileId: Long): ResponseEntity<ByteArray> {
        val (filePath, fileContent) = fileRetrievalService.getFileContent(fileId)

        val headers = HttpHeaders().apply {
            add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"${filePath.fileName}\"")
            add(HttpHeaders.CONTENT_TYPE, Files.probeContentType(filePath))
        }

        return ResponseEntity(fileContent, headers, HttpStatus.OK)
    }

    @DeleteMapping("/{fileId}")
    fun deleteFile(@PathVariable fileId: Long): ResponseEntity<Void> {
        fileRetrievalService.deleteFile(fileId)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @PutMapping("/{fileId}")
    fun updateFile(@PathVariable fileId: Long, @RequestParam("file") newFile: MultipartFile): ResponseEntity<FileEntity> {
        val updatedFileEntity = fileRetrievalService.updateFile(fileId, newFile)
        return ResponseEntity(updatedFileEntity, HttpStatus.OK)
    }
}
