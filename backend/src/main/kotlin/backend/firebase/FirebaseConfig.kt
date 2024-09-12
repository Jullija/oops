package backend.firebase

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import org.springframework.context.annotation.Configuration
import javax.annotation.PostConstruct

@Configuration
class FirebaseConfig {

    @PostConstruct
    fun initFirebase() {
        // Load the service account key JSON file from the classpath
        val serviceAccount = this::class.java.classLoader.getResourceAsStream("firebase_secret.json")
            ?: throw IllegalStateException("Firebase service account file not found.")

        // Set the Firebase options with credentials
        val options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build()

        // Initialize the default FirebaseApp instance if not already initialized
        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options)
        }
    }
}
