import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.multipart.MaxUploadSizeExceededException
import org.springframework.web.multipart.MultipartException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import java.io.FileNotFoundException
import java.io.IOException

@ControllerAdvice
class FileUploadExceptionAdvice {
    @ExceptionHandler(MaxUploadSizeExceededException::class)
    fun handleMaxSizeException(exc: MaxUploadSizeExceededException): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "File too large!",
            "details" to "The uploaded file exceeds the maximum allowable size. Please upload a smaller file."
        )
        return ResponseEntity(response, HttpStatus.BAD_REQUEST)
    }

    @ExceptionHandler(MultipartException::class)
    fun handleMultipartException(exc: MultipartException): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "File upload error",
            "details" to "There was an error with the file upload. Please ensure the file is valid and try again."
        )
        return ResponseEntity(response, HttpStatus.BAD_REQUEST)
    }

    @ExceptionHandler(IOException::class)
    fun handleIOException(exc: IOException): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "File processing error",
            "details" to "An error occurred while processing the file. Please try again later."
        )
        return ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    @ExceptionHandler(FileNotFoundException::class)
    fun handleFileNotFoundException(exc: FileNotFoundException): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "File not found",
            "details" to "The requested file could not be found. Please check the file path and try again."
        )
        return ResponseEntity(response, HttpStatus.NOT_FOUND)
    }

    @ExceptionHandler(IllegalStateException::class)
    fun handleIllegalStateException(exc: IllegalStateException): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "Invalid request state",
            "details" to "The request is in an invalid state for file processing. Please try again."
        )
        return ResponseEntity(response, HttpStatus.BAD_REQUEST)
    }

    @ExceptionHandler(Exception::class)
    fun handleGeneralException(exc: Exception): ResponseEntity<Map<String, String>> {
        val response = mapOf(
            "error" to "Unexpected error",
            "details" to "An unexpected error occurred. Please try again later."
        )
        return ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
