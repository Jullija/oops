package backend.mockTests

import backend.award.Award
import backend.award.AwardRepository
import backend.award.AwardType
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.graphql.AwardsDataFetcher
import backend.graphql.PhotoAssigner
import backend.groups.GroupsRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import backend.users.UsersRepository
import io.mockk.*
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig
import java.util.*

@SpringJUnitConfig
class AwardsDataFetcherTest {

    private lateinit var awardsDataFetcher: AwardsDataFetcher

    private val bonusesRepository: BonusesRepository = mockk()
    private val usersRepository: UsersRepository = mockk()
    private val pointsRepository: PointsRepository = mockk()
    private val categoriesRepository: CategoriesRepository = mockk()
    private val subcategoriesRepository: SubcategoriesRepository = mockk()
    private val groupsRepository: GroupsRepository = mockk()
    private val editionRepository: EditionRepository = mockk()
    private val fileEntityRepository: FileEntityRepository = mockk()
    private val awardRepository: AwardRepository = mockk()
    private val photoAssigner: PhotoAssigner = mockk()

    private val awardId = 1L
    private val fileId = 2L
    private val categoryId = 1L
    private val awardName = "Test Award"
    private val awardType = "ADDITIVE"
    private val awardValue = 10.0f
    private val maxUsages = 5
    private val category = Categories(
        categoryName = "Test Category",
        canAddPoints = true,
        label = "Test Label"
    )

    @BeforeEach
    fun setUp() {
        awardsDataFetcher = AwardsDataFetcher().apply {
            this.bonusesRepository = this@AwardsDataFetcherTest.bonusesRepository
            this.usersRepository = this@AwardsDataFetcherTest.usersRepository
            this.pointsRepository = this@AwardsDataFetcherTest.pointsRepository
            this.categoriesRepository = this@AwardsDataFetcherTest.categoriesRepository
            this.subcategoriesRepository = this@AwardsDataFetcherTest.subcategoriesRepository
            this.groupsRepository = this@AwardsDataFetcherTest.groupsRepository
            this.editionRepository = this@AwardsDataFetcherTest.editionRepository
            this.fileEntityRepository = this@AwardsDataFetcherTest.fileEntityRepository
            this.awardRepository = this@AwardsDataFetcherTest.awardRepository
            this.photoAssigner = this@AwardsDataFetcherTest.photoAssigner
        }
    }

    @Test
    fun `should assign photo to award successfully`() {
        every { photoAssigner.assignPhotoToAssignee(awardRepository, "image/award", awardId, fileId) } returns true

        val result = awardsDataFetcher.assignPhotoToAward(awardId, fileId)

        assertTrue(result)
        verify { photoAssigner.assignPhotoToAssignee(awardRepository, "image/award", awardId, fileId) }
    }

    @Test
    fun `should add award successfully`() {
        val awardsWithSameName = listOf<Award>()

        every { categoriesRepository.findById(categoryId) } returns Optional.of(category)
        every { awardRepository.findAllByAwardName(awardName) } returns awardsWithSameName
        every { awardRepository.save(any()) } answers { firstArg() }

        val result = awardsDataFetcher.addAward(
            awardName = awardName,
            awardType = awardType,
            awardValue = awardValue,
            categoryId = categoryId,
            maxUsages = maxUsages
        )

        assertNotNull(result)
        assertEquals(awardName, result.awardName)
        assertEquals(AwardType.ADDITIVE, result.awardType)
        assertEquals(awardValue, result.awardValue)
        assertEquals(maxUsages, result.maxUsages)

        verify { awardRepository.save(any()) }
    }

    @Test
    fun `should throw exception for invalid award type`() {
        val invalidAwardType = "INVALID_TYPE"

        assertThrows<IllegalArgumentException> {
            awardsDataFetcher.addAward(
                awardName = awardName,
                awardType = invalidAwardType,
                awardValue = awardValue,
                categoryId = categoryId
            )
        }
    }

    @Test
    fun `should throw exception when award value is out of bounds for additive type`() {
        val negativeAwardValue = -5.0f

        assertThrows<IllegalArgumentException> {
            awardsDataFetcher.addAward(
                awardName = "Negative Value Award",
                awardType = awardType,
                awardValue = negativeAwardValue,
                categoryId = categoryId
            )
        }
    }

    @Test
    fun `should throw exception when award value is out of bounds for multiplicative type`() {
        val multiplicativeAwardType = "MULTIPLICATIVE"
        val outOfBoundsValue = 1.5f

        assertThrows<IllegalArgumentException> {
            awardsDataFetcher.addAward(
                awardName = "Invalid Multiplicative Award",
                awardType = multiplicativeAwardType,
                awardValue = outOfBoundsValue,
                categoryId = categoryId
            )
        }
    }

    @Test
    fun `should throw exception when award with the same name and value already exists`() {
        val existingAward = Award(
            awardName = awardName,
            awardType = AwardType.ADDITIVE,
            awardValue = awardValue,
            category = category,
            maxUsages = maxUsages,
            label = "Test Label"
        )

        every { categoriesRepository.findById(categoryId) } returns Optional.of(category)
        every { awardRepository.findAllByAwardName(awardName) } returns listOf(existingAward)

        assertThrows<IllegalArgumentException> {
            awardsDataFetcher.addAward(
                awardName = awardName,
                awardType = awardType,
                awardValue = awardValue,
                categoryId = categoryId
            )
        }
    }
}
