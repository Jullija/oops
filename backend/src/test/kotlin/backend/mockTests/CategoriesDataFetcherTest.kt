package backend.mockTests

import backend.categories.Categories
import backend.categories.CategoriesRepository
import backend.graphql.CategoriesDataFetcher
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig

@SpringJUnitConfig
class CategoriesDataFetcherTest {

    private lateinit var categoriesDataFetcher: CategoriesDataFetcher
    private val categoriesRepository: CategoriesRepository = mockk()

    @BeforeEach
    fun setUp() {
        categoriesDataFetcher = CategoriesDataFetcher().apply {
            this.categoriesRepository = this@CategoriesDataFetcherTest.categoriesRepository
        }
    }

    @Test
    fun `should add category successfully`() {
        val categoryName = "New Category"
        val canAddPoints = true
        val label = "Test Label"
        val categoriesWithSameName = emptyList<Categories>()

        every { categoriesRepository.findAllByCategoryName(categoryName) } returns categoriesWithSameName
        every { categoriesRepository.save(any()) } answers { firstArg() }

        val result = categoriesDataFetcher.addCategory(categoryName, canAddPoints, label)

        assertNotNull(result)
        assertEquals(categoryName, result.categoryName)
        assertEquals(canAddPoints, result.canAddPoints)
        assertEquals(label, result.label)

        verify { categoriesRepository.save(any()) }
    }

    @Test
    fun `should throw exception when category with the same name and canAddPoints exists`() {
        val categoryName = "Existing Category"
        val canAddPoints = true
        val existingCategory = Categories(
            categoryName = categoryName,
            canAddPoints = canAddPoints,
            label = "Existing Label"
        )
        every { categoriesRepository.findAllByCategoryName(categoryName) } returns listOf(existingCategory)

        val exception = assertThrows<IllegalArgumentException> {
            categoriesDataFetcher.addCategory(categoryName, canAddPoints)
        }

        assertEquals("Category with this name and canAddPoints already exists", exception.message)
    }

    @Test
    fun `should add category when category with same name but different canAddPoints exists`() {
        val categoryName = "Category Name"
        val canAddPoints = true
        val label = "New Label"
        val existingCategory = Categories(
            categoryName = categoryName,
            canAddPoints = false,
            label = "Existing Label"
        )

        every { categoriesRepository.findAllByCategoryName(categoryName) } returns listOf(existingCategory)
        every { categoriesRepository.save(any()) } answers { firstArg() }

        val result = categoriesDataFetcher.addCategory(categoryName, canAddPoints, label)

        assertNotNull(result)
        assertEquals(categoryName, result.categoryName)
        assertEquals(canAddPoints, result.canAddPoints)
        assertEquals(label, result.label)

        verify { categoriesRepository.save(any()) }
    }
}
