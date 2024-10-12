package backend.utils

import backend.users.Users
import backend.users.UsersRepository
import com.google.firebase.auth.FirebaseAuth
import org.springframework.stereotype.Component
import org.springframework.web.context.request.RequestContextHolder
import org.springframework.web.context.request.ServletRequestAttributes

@Component
class UserMapper(
    private val usersRepository: UsersRepository
) {
    fun getUserFromToken(): Users? {
        val request = (RequestContextHolder.getRequestAttributes() as ServletRequestAttributes).request
        val authorizationHeader = request.getHeader("Authorization") ?: return null

        val token = authorizationHeader.removePrefix("Bearer ").trim()
        // TODO: Remove this bypass
        if (token.startsWith("Bypass")) {
            val id = token.substringAfter("Bypass").toLongOrNull()
                return id?.let { usersRepository.findById(it).orElse(null) }
        }
        return try {
            val decodedToken = FirebaseAuth.getInstance().verifyIdToken(token)
            val firebaseUid = decodedToken.uid

            usersRepository.findByFirebaseUid(firebaseUid)
        } catch (e: Exception) {
            null
        }
    }

    fun getCurrentUser(): Users {
        return getUserFromToken() ?: throw IllegalArgumentException("User not authenticated")
    }
}
