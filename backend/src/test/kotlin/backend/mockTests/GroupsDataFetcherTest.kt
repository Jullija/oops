package backend.mockTests

import backend.groups.Groups
import backend.groups.GroupsRepository
import backend.edition.Edition
import backend.edition.EditionRepository
import backend.files.FileEntity
import backend.files.FileEntityRepository
import backend.graphql.GroupsDataFetcher
import backend.userGroups.UserGroupsRepository
import backend.users.Users
import backend.users.UsersRoles
import backend.users.UsersRepository
import backend.weekdays.Weekdays
import backend.weekdays.WeekdaysRepository
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.sql.Time
import java.time.LocalDate
import java.util.*

class GroupsDataFetcherTest {

    private lateinit var groupsDataFetcher: GroupsDataFetcher
    private val groupsRepository: GroupsRepository = mockk()
    private val userGroupsRepository : UserGroupsRepository = mockk()
    private val editionRepository: EditionRepository = mockk()
    private val fileRepository: FileEntityRepository = mockk()
    private val usersRepository: UsersRepository = mockk()
    private val weekdaysRepository: WeekdaysRepository = mockk()

    private val editionId = 1L
    private val groupName = "Test Group"
    private val weekdayId = 1L
    private val startTime = Time.valueOf("10:00:00")
    private val endTime = Time.valueOf("11:00:00")
    private val teacherId = 1L
    private val label = "Group Label"

    private lateinit var edition: Edition
    private lateinit var weekday: Weekdays
    private lateinit var teacher: Users
    private lateinit var group: Groups

    @BeforeEach
    fun setUp() {
        groupsDataFetcher = GroupsDataFetcher().apply {
            this.groupsRepository = this@GroupsDataFetcherTest.groupsRepository
            this.editionRepository = this@GroupsDataFetcherTest.editionRepository
            this.fileRepository = this@GroupsDataFetcherTest.fileRepository
            this.usersRepository = this@GroupsDataFetcherTest.usersRepository
            this.weekdaysRepository = this@GroupsDataFetcherTest.weekdaysRepository
            this.userGroupsRepository = this@GroupsDataFetcherTest.userGroupsRepository
        }

        edition = Edition(
            editionId = editionId,
            editionName = "Edition Test",
            editionYear = 2023,
            label = "Edition Label",
            startDate = LocalDate.now().minusMonths(1),
            endDate = LocalDate.now().plusMonths(1)
        )

        weekday = Weekdays(
            weekdayId = weekdayId,
            weekdayName = "Monday",
            weekdayAbbr = "M",
            label = "test",
            ordinalNumber = 1
        )

        teacher = Users(
            userId = teacherId,
            indexNumber = 100,
            nick = "teacher",
            firstName = "Test",
            secondName = "Teacher",
            role = UsersRoles.TEACHER,
            label = "Teacher Label"
        )

        group = Groups(
            groupsId = 1L,
            groupName = groupName,
            label = label,
            teacher = teacher,
            weekday = weekday,
            startTime = startTime,
            endTime = endTime,
            edition = edition
        )
    }

    @Test
    fun `should add group successfully`() {
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every { groupsRepository.existsByGroupNameAndEdition(groupName, edition) } returns false
        every { groupsRepository.existsByTeacherAndWeekdayAndStartTimeAndEndTimeAndEdition(teacher, weekday, startTime, endTime, edition) } returns false
        every { weekdaysRepository.findById(weekdayId) } returns Optional.of(weekday)
        every { usersRepository.findById(teacherId) } returns Optional.of(teacher)
        every { groupsRepository.save(any()) } answers { firstArg() }
        every { userGroupsRepository.save(any()) } answers { firstArg() }

        val result = groupsDataFetcher.addGroup(editionId, groupName, weekdayId, startTime, endTime, teacherId, label)

        assertNotNull(result)
        assertEquals(groupName, result.groupName)
        assertEquals(teacher, result.teacher)
        assertEquals(weekday, result.weekday)

        verify { groupsRepository.save(any()) }
        verify { userGroupsRepository.save(any()) }
    }

    @Test
    fun `should assign photos to groups successfully`() {
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every { groupsRepository.findByEdition(edition) } returns listOf(group)
        every { fileRepository.findAllByFileType("image/group") } returns listOf(mockk(), mockk())
        every { groupsRepository.save(any()) } answers { firstArg() }

        val result = groupsDataFetcher.assignPhotosToGroups(editionId)

        assertTrue(result)
        verify { groupsRepository.save(any()) }
    }

    @Test
    fun `should throw exception when edition has already ended while assigning photos`() {
        val expiredEdition = mockk<Edition> {
            every { endDate } returns LocalDate.now().minusDays(1)
        }
        every { editionRepository.findById(editionId) } returns Optional.of(expiredEdition)

        assertThrows<IllegalArgumentException> {
            groupsDataFetcher.assignPhotosToGroups(editionId)
        }
    }

    @Test
    fun `should throw exception when group name already exists`() {
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every { groupsRepository.existsByGroupNameAndEdition(groupName, edition) } returns true

        assertThrows<IllegalArgumentException> {
            groupsDataFetcher.addGroup(editionId, groupName, weekdayId, startTime, endTime, teacherId, label)
        }
    }

    @Test
    fun `should throw exception when start time is after end time`() {
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every {groupsRepository.existsByGroupNameAndEdition(any(), any())} returns true

        assertThrows<IllegalArgumentException> {
            groupsDataFetcher.addGroup(editionId, groupName, weekdayId, Time.valueOf("12:00:00"), Time.valueOf("11:00:00"), teacherId, label)
        }
    }

    @Test
    fun `should throw exception when teacher is not found`() {
        every { editionRepository.findById(editionId) } returns Optional.of(edition)
        every { weekdaysRepository.findById(weekdayId) } returns Optional.of(weekday)
        every { usersRepository.findById(teacherId) } returns Optional.empty()
        every {groupsRepository.existsByGroupNameAndEdition(any(), any())} returns true

        assertThrows<IllegalArgumentException> {
            groupsDataFetcher.addGroup(editionId, groupName, weekdayId, startTime, endTime, teacherId, label)
        }
    }
}
