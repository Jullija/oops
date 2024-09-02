package backend.graphql

import backend.award.AwardRepository
import backend.awardEdition.AwardEdition
import backend.awardEdition.AwardEditionRepository
import backend.edition.EditionRepository
import backend.points.PointsRepository
import backend.subcategories.SubcategoriesRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class AwardEditionDataFetcher {

    @Autowired
    private lateinit var awardEditionRepository: AwardEditionRepository

    @Autowired
    lateinit var pointsRepository: PointsRepository

    @Autowired
    lateinit var subcategoriesRepository: SubcategoriesRepository

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var awardRepository: AwardRepository

    @DgsMutation
    @Transactional
    fun addAwardToEdition(@InputArgument awardId: Long, @InputArgument editionId: Long): AwardEdition {
        val award = awardRepository.findById(awardId).orElseThrow { throw Exception("Award not found") }
        val edition = editionRepository.findById(editionId).orElseThrow { throw Exception("Edition not found") }

        if (awardEditionRepository.existsByAward_AwardNameAndEdition(award.awardName, edition)){
            throw Exception("Award with this name already exists in this edition")
        }

        val awardEdition = AwardEdition(
            award = award,
            edition = edition,
            label = ""
        )
        return awardEditionRepository.save(awardEdition)
    }
}
