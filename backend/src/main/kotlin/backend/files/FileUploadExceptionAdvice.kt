import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.multipart.MaxUploadSizeExceededException
import org.springframework.web.servlet.mvc.support.RedirectAttributes

@ControllerAdvice
class FileUploadExceptionAdvice {
    @ExceptionHandler(MaxUploadSizeExceededException::class)
    fun handleMaxSizeException(exc: MaxUploadSizeExceededException?, redirectAttributes: RedirectAttributes): String {
        redirectAttributes.addFlashAttribute("message", "File too large!")
        return "redirect:/uploadStatus"
    }
}