package backend.users

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserRecord
import org.springframework.stereotype.Service
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import kotlin.random.Random

@Service
class FirebaseUserService (
    private val mailSender: JavaMailSender
)
{
    // Generate a random password
    private fun generateRandomPassword(length: Int = 12): String {
        val allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&*()-_+=<>?"
        return (1..length)
            .map { allowedChars.random() }
            .joinToString("")
    }

    // Create a new user in Firebase Authentication with email and random password
    fun createFirebaseUser(user: Users): String {
        var randomPassword = generateRandomPassword()
        randomPassword = "aaaaaa"// Generate a random password

        val request = UserRecord.CreateRequest()
            .setEmail(user.email) // Assuming user has an email field; if not, adjust accordingly
            .setEmailVerified(false)
            .setPassword(randomPassword)
            .setDisplayName("${user.firstName} ${user.secondName} ${user.nick} ${user.indexNumber}")
            .setDisabled(false)

        val userRecord = FirebaseAuth.getInstance().createUser(request)
        val additionalClaims = mapOf("userId" to user.userId.toString())
        FirebaseAuth.getInstance().setCustomUserClaims(userRecord.uid, additionalClaims)

        sendPasswordEmail(user.email, randomPassword)
        return userRecord.uid // Return the UID of the newly created Firebase user
    }

    // Send email with the random password to the user
    private fun sendPasswordEmail(email: String, password: String) {
        val message = mailSender.createMimeMessage()
        val helper = MimeMessageHelper(message, true)

        helper.setTo(email)
        helper.setSubject("Your New Account Password")
        helper.setText(
            """
            Hello,

            Your account has been successfully created. Here are your login credentials:

            Email: $email
            Password: $password

            Please change your password after your first login for security reasons.

            Best regards,
            Your Company
            """.trimIndent()
        )

        mailSender.send(message)
    }


    // Delete a user from Firebase Authentication
    fun deleteFirebaseUser(uid: String) {
        FirebaseAuth.getInstance().deleteUser(uid)
    }
}
