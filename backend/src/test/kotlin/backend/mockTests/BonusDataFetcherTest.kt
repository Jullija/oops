package backend.graphql

import backend.award.*
import backend.awardEdition.AwardEdition
import backend.awardEdition.AwardEditionRepository
import backend.bonuses.BonusesRepository
import backend.categories.Categories
import backend.chestHistory.ChestHistory
import backend.chestHistory.ChestHistoryRepository
import backend.chests.Chests
import backend.edition.Edition
import backend.groups.Groups
import backend.groups.GroupsRepository
import backend.points.PointsRepository
import backend.subcategories.Subcategories
import backend.subcategories.SubcategoriesRepository
import backend.userGroups.UserGroupId
import backend.userGroups.UserGroups
import backend.users.Users
import backend.users.UsersRoles
import backend.weekdays.Weekdays
import io.mockk.*
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig
import java.math.BigDecimal
import java.sql.Time
import java.time.LocalDate
import java.util.*

@SpringJUnitConfig
class BonusDataFetcherTest {

    private lateinit var bonusDataFetcher: BonusDataFetcher
    private val bonusRepository: BonusesRepository = mockk()
    private val pointsRepository: PointsRepository = mockk()
    private val chestHistoryRepository: ChestHistoryRepository = mockk()
    private val awardRepository: AwardRepository = mockk()
    private val awardEditionRepository: AwardEditionRepository = mockk()
    private val groupsRepository: GroupsRepository = mockk()
    private val subcategoriesRepository: SubcategoriesRepository = mockk()

    private var chestHistoryId: Long = 1L
    private var awardId: Long = 1L
    private var userId: Long = 1L
    private var editionId: Long = 1L

    private lateinit var edition: Edition
    private lateinit var category: Categories
    private lateinit var subcategory: Subcategories
    private lateinit var user: Users
    private lateinit var teacher: Users
    private lateinit var chest: Chests
    private lateinit var chestHistory: ChestHistory
    private lateinit var award: Award
    private lateinit var weekday: Weekdays

    @BeforeEach
    fun setUp() {
        bonusDataFetcher = BonusDataFetcher().apply {
            this.bonusRepository = this@BonusDataFetcherTest.bonusRepository
            this.pointsRepository = this@BonusDataFetcherTest.pointsRepository
            this.chestHistoryRepository = this@BonusDataFetcherTest.chestHistoryRepository
            this.awardRepository = this@BonusDataFetcherTest.awardRepository
            this.awardEditionRepository = this@BonusDataFetcherTest.awardEditionRepository
            this.groupsRepository = this@BonusDataFetcherTest.groupsRepository
            this.subcategoriesRepository = this@BonusDataFetcherTest.subcategoriesRepository
        }

        edition = Edition(
            editionId = editionId,
            editionName = "Edition Name",
            editionYear = 2023,
            label = "Edition Label",
            startDate = LocalDate.now().minusDays(5),
            endDate = LocalDate.now().plusDays(5)
        )

        category = Categories(
            categoryName = "Test Category",
            canAddPoints = true,
            label = "Test Label",
            lightColor = "#FFFFFF",
            darkColor = "#000000"
        )

        award = Award(
            awardId = awardId,
            awardName = "Test Award",
            awardType = AwardType.ADDITIVE,
            awardValue = BigDecimal(10), // Using BigDecimal
            category = category,
            maxUsages = 5,
            description = "Test Description",
            label = "Award Label"
        )

        subcategory = Subcategories(
            subcategoryId = 1L,
            subcategoryName = "Test Subcategory",
            maxPoints = BigDecimal(1),
            ordinalNumber = 1,
            category = category,
            edition = edition,
            label = "Test Label"
        )

        user = Users(
            userId = userId,
            indexNumber = 1,
            nick = "test",
            firstName = "Test",
            secondName = "User",
            role = UsersRoles.STUDENT,
            email = "test@test.com",
            label = "test"
        )

        teacher = Users(
            userId = 2L,
            indexNumber = 2,
            nick = "teacher",
            firstName = "Test",
            secondName = "Teacher",
            role = UsersRoles.TEACHER,
            email = "teacher@test.com",
            label = "teacher"
        )

        weekday = Weekdays(
            weekdayId = 1L,
            weekdayName = "Monday",
            weekdayAbbr = "M",
            label = "test"
        )

        chest = Chests(
            chestId = chestHistoryId,
            chestType = "Test Chest",
            label = "Test Chest Label",
            edition = edition
        )

        chestHistory = ChestHistory(
            chestHistoryId = chestHistoryId,
            user = user,
            teacher = teacher,
            chest = chest,
            subcategory = subcategory,
            label = "Test Chest History"
        )

        val group = Groups(
            groupsId = 1L,
            groupName = "Test Group",
            generatedName = "Generated Group",
            usosId = 1001,
            label = "Group Label",
            teacher = teacher,
            weekday = weekday,
            startTime = Time.valueOf("09:00:00"),
            endTime = Time.valueOf("10:00:00"),
            edition = edition
        )

        val userGroup = UserGroups(
            userGroupsId = UserGroupId(userId = user.userId, groupId = group.groupsId),
            user = user,
            group = group
        )

        group.userGroups = setOf(userGroup)

        every { groupsRepository.findByUserGroups_User_UserId(userId) } returns listOf(userGroup.group)
    }

    @Test
    fun `should add bonus successfully`() {
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(chestHistory)
        every { awardRepository.findById(awardId) } returns Optional.of(award)
        every { user.getAwardUsageCount(award, bonusRepository) } returns 0
        every { bonusRepository.findByChestHistory(chestHistory) } returns emptyList()
        every { bonusRepository.findByPoints(any()) } returns emptyList()
        every { awardEditionRepository.findByAward(award) } returns listOf(
            AwardEdition(award = award, edition = edition, label = "Test Award Edition")
        )
        every { pointsRepository.save(any()) } answers { firstArg() }
        every { bonusRepository.save(any()) } answers { firstArg() }
        every { chestHistoryRepository.save(any()) } answers { firstArg() }

        val result = bonusDataFetcher.addBonusMutation(chestHistoryId, awardId, checkDates = true)
        assertNotNull(result)
        assertEquals(award, result.bonus.award)
        assertEquals(chestHistory, result.bonus.chestHistory)
        assertEquals(BigDecimal(10), result.points.value)

        verify { bonusRepository.save(any()) }
        verify { chestHistoryRepository.save(any()) }
    }

    // Additional test cases go here...

}
