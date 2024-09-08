import backend.edition.Edition
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.graphql.LevelsDataFetcher
import backend.graphql.PhotoAssigner
import backend.levels.Levels
import backend.levels.LevelsRepository
import backend.userGroups.UserGroups
import backend.userLevel.UserLevel
import backend.users.Users
import backend.users.UsersRepository
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.time.LocalDate
import java.util.*

class LevelsDataFetcherTest {

    private lateinit var levelsDataFetcher: LevelsDataFetcher
    private val editionRepository: EditionRepository = mockk()
    private val levelsRepository: LevelsRepository = mockk()
    private val fileEntityRepository: FileEntityRepository = mockk()
    private val usersRepository: UsersRepository = mockk()
    private val photoAssigner: PhotoAssigner = mockk()

    private val editionId = 1L
    private val levelId = 1L
    private val studentId = 1L
    private val fileId = 1L
    private val name = "Level 1"
    private val maximumPoints = 100.0
    private val grade = 5.0

    @BeforeEach
    fun setUp() {
        levelsDataFetcher = LevelsDataFetcher().apply {
            this.editionRepository = this@LevelsDataFetcherTest.editionRepository
            this.levelsRepository = this@LevelsDataFetcherTest.levelsRepository
            this.fileEntityRepository = this@LevelsDataFetcherTest.fileEntityRepository
            this.usersRepository = this@LevelsDataFetcherTest.usersRepository
            this.photoAssigner = this@LevelsDataFetcherTest.photoAssigner
        }
    }

    @Test
    fun `should add level successfully`() {
        val edition = mockk<Edition> {
            every { endDate } returns LocalDate.now().plusDays(10)
        }
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every { levelsRepository.findByEdition(edition) } returns emptyList()
        every { fileEntityRepository.findAllByFileType("image/level/sample") } returns listOf(mockk())
        every { levelsRepository.save(any()) } answers { firstArg() }

        val result = levelsDataFetcher.addLevel(editionId, name, maximumPoints, grade)

        assertNotNull(result)
        assertEquals(name, result.levelName)
        assertEquals(maximumPoints, result.maximumPoints)
        assertEquals(grade, result.grade)

        verify { levelsRepository.save(any()) }
    }

    @Test
    fun `should throw exception when edition has already ended`() {
        val endedEdition = mockk<Edition> {
            every { endDate } returns LocalDate.now().minusDays(1)
        }
        every { editionRepository.findById(editionId) } returns Optional.of(endedEdition)

        assertThrows<IllegalArgumentException> {
            levelsDataFetcher.addLevel(editionId, name, maximumPoints, grade)
        }
    }

    @Test
    fun `should assign photo to level successfully`() {
        val level = mockk<Levels> {
            every { edition } returns mockk {
                every { endDate } returns LocalDate.now().plusDays(10)
            }
        }
        every { levelsRepository.findById(levelId) } returns Optional.of(level)
        every { photoAssigner.assignPhotoToAssignee(levelsRepository, "image/level", levelId, fileId) } returns true

        val result = levelsDataFetcher.assignPhotoToLevel(levelId, fileId)

        assertTrue(result)
        verify { photoAssigner.assignPhotoToAssignee(levelsRepository, "image/level", levelId, fileId) }
    }

    @Test
    fun `should throw exception when assigning photo to level of ended edition`() {
        val level = mockk<Levels> {
            every { edition } returns mockk {
                every { endDate } returns LocalDate.now().minusDays(1)
            }
        }
        every { levelsRepository.findById(levelId) } returns Optional.of(level)

        assertThrows<IllegalArgumentException> {
            levelsDataFetcher.assignPhotoToLevel(levelId, fileId)
        }
    }


}

