package backend.files

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.WebRequest
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@ControllerAdvice
@RestController
class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException::class)
    fun handleRuntimeException(ex: RuntimeException, request: WebRequest): ResponseEntity<Map<String, Any>> {
        val responseBody = createErrorResponse(ex.message ?: "Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR, request)
        return ResponseEntity(responseBody, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleIllegalArgumentException(ex: IllegalArgumentException, request: WebRequest): ResponseEntity<Map<String, Any>> {
        val responseBody = createErrorResponse(ex.message ?: "Bad Request", HttpStatus.BAD_REQUEST, request)
        return ResponseEntity(responseBody, HttpStatus.BAD_REQUEST)
    }

    private fun createErrorResponse(message: String, status: HttpStatus, request: WebRequest): Map<String, Any> {
        val timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME)
        return mapOf(
            "timestamp" to timestamp,
            "status" to status.value(),
            "error" to status.reasonPhrase,
            "message" to message,
            "path" to request.getDescription(false).substringAfter("uri=")
        )
    }
}
