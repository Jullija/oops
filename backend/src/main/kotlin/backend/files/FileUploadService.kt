package backend.files

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

@Service
class FileUploadService(private val fileEntityRepository: FileEntityRepository) {

    @Value("\${file.upload-dir}")
    private lateinit var uploadDir: String

    fun saveFile(file: MultipartFile, fileType: String): FileEntity {
        val fileName = file.originalFilename ?: throw IllegalArgumentException("File name is invalid")

        // Resolve the relative path to an absolute path
        val directoryPath = Paths.get(uploadDir).toAbsolutePath()
        val filePath = directoryPath.resolve(fileName)

        // Ensure the directory exists
        if (Files.notExists(directoryPath)) {
            Files.createDirectories(directoryPath)
        }

        Files.copy(file.inputStream, filePath)
        val fileEntity = FileEntity(pathToFile = filePath.toString(), fileName = fileName, fileType = fileType)
        return fileEntityRepository.save(fileEntity)
    }
}
