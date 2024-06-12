package backend.files

import org.springframework.stereotype.Service
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

@Service
class FileRetrievalService(private val fileEntityRepository: FileEntityRepository) {

    fun getFileContent(fileId: Long): Pair<Path, ByteArray> {
        val fileEntity = fileEntityRepository.findById(fileId).orElseThrow { IllegalArgumentException("Invalid file ID") }
        val filePath = Paths.get(fileEntity.pathToFile)
        val fileContent = Files.readAllBytes(filePath)
        return Pair(filePath, fileContent)
    }
}
