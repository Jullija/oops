package backend.userLevel

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserLevelRepository : JpaRepository<UserLevel, Long> {

}
