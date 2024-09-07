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
import backend.userGroups.UserGroupsRepository
import backend.users.Users
import backend.users.UsersRoles
import backend.weekdays.Weekdays
import io.mockk.*
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.sql.Time
import java.time.LocalDate
import java.util.*

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
            label = "Test Label"
        )

        award = Award(
            awardId = awardId,
            awardName = "Test Award",
            awardType = AwardType.ADDITIVE,
            awardValue = 10.0f,
            category = category,
            maxUsages = 5,
            label = "Award Label"
        )

        subcategory = Subcategories(
            subcategoryId = 1L,
            subcategoryName = "Test Subcategory",
            maxPoints = 1F,
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
            label = "test"
        )

        teacher = Users(
            userId = 2L,
            indexNumber = 2,
            nick = "teacher",
            firstName = "Test",
            secondName = "Teacher",
            role = UsersRoles.TEACHER,
            label = "teacher"
        )

        val weekday = Weekdays(
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
        assertEquals(10.0f, result.points.value)

        verify { bonusRepository.save(any()) }
        verify { chestHistoryRepository.save(any()) }
    }

    @Test
    fun `should throw exception when chest history has an existing bonus`() {
        val mockedChestHistory = mockk<ChestHistory>()

        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)
        every { mockedChestHistory.hasExistingBonus(bonusRepository) } returns true

        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId)
        }
    }

    @Test
    fun `should throw exception when chest history is already opened`() {
        val mockedChestHistory = mockk<ChestHistory>()

        every {mockedChestHistory.hasExistingBonus(any()) } returns false
        every { mockedChestHistory.opened } returns true
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)

        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId)
        }
    }


    @Test
    fun `should throw exception when user cannot apply more bonuses for an award`() {
        val mockedUser = mockk<Users>()
        val mockedChestHistory = mockk<ChestHistory>()

        every {mockedChestHistory.hasExistingBonus(any()) } returns false
        every { mockedChestHistory.opened } returns false
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)
        every { awardRepository.findById(awardId) } returns Optional.of(award)
        every { mockedUser.getAwardUsageCount(award, bonusRepository) } returns award.maxUsages.toLong() // Simulate max usage reached
        every { mockedChestHistory.user } returns mockedUser // Replace user field with mocked user

        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId)
        }
    }



    @Test
    fun `should throw exception when user's edition does not match award's edition`() {
        val mockedChestHistory = mockk<ChestHistory>()
        val mockedUser = mockk<Users>()

        every {mockedChestHistory.hasExistingBonus(any()) } returns false
        every { mockedChestHistory.opened } returns false
        every {mockedUser.getAwardUsageCount(any(), any())} returns 0
        every {mockedUser.userId} returns userId
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)
        every { awardRepository.findById(awardId) } returns Optional.of(award)
        every { mockedChestHistory.user } returns mockedUser
        every { awardEditionRepository.findByAward(award) } returns emptyList() // No editions for the award
        every { groupsRepository.findByUserGroups_User_UserId(mockedUser.userId) } returns emptyList() // No matching groups

        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId)
        }
    }


    @Test
    fun `should throw exception when award's edition has not started`() {
        val mockedChestHistory = mockk<ChestHistory>()
        val mockedUser = mockk<Users>()
        val futureEdition = mockk<Edition> {
            every { startDate } returns LocalDate.now().plusDays(1)  // Future start date
            every { endDate } returns LocalDate.now().plusDays(10)
        }

        every { mockedChestHistory.hasExistingBonus(any()) } returns false
        every { mockedChestHistory.opened } returns false
        every { mockedUser.getAwardUsageCount(any(), any()) } returns 0
        every { mockedUser.userId } returns userId
        every { mockedChestHistory.user } returns mockedUser
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)
        every { awardRepository.findById(awardId) } returns Optional.of(award)
        every { awardEditionRepository.findByAward(award) } returns listOf(
            AwardEdition(award = award, edition = futureEdition, label = "Test Award Edition")
        )
        every { groupsRepository.findByUserGroups_User_UserId(mockedUser.userId) } returns emptyList()

        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId, checkDates = true)
        }
    }

    @Test
    fun `should throw exception when award's edition has ended`() {
        // Create fully mocked objects
        val mockedChestHistory = mockk<ChestHistory>()
        val mockedUser = mockk<Users>()
        val pastEdition = mockk<Edition> {
            every { startDate } returns LocalDate.now().minusDays(10)  // Past start date
            every { endDate } returns LocalDate.now().minusDays(1)     // Past end date
        }

        // Arrange
        every { mockedChestHistory.hasExistingBonus(any()) } returns false
        every { mockedChestHistory.opened } returns false
        every { mockedUser.getAwardUsageCount(any(), any()) } returns 0
        every { mockedUser.userId } returns userId
        every { mockedChestHistory.user } returns mockedUser
        every { chestHistoryRepository.findById(chestHistoryId) } returns Optional.of(mockedChestHistory)
        every { awardRepository.findById(awardId) } returns Optional.of(award)
        every { awardEditionRepository.findByAward(award) } returns listOf(
            AwardEdition(award = award, edition = pastEdition, label = "Test Award Edition")
        )
        every { groupsRepository.findByUserGroups_User_UserId(mockedUser.userId) } returns emptyList()

        // Act & Assert
        assertThrows<IllegalArgumentException> {
            bonusDataFetcher.addBonusMutation(chestHistoryId, awardId, checkDates = true)
        }
    }

}
