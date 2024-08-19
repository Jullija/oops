package backend.graphql

import backend.edition.EditionRepository
import backend.files.FileEntityRepository
import backend.levels.Levels
import backend.levels.LevelsRepository
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional

@DgsComponent
class LevelsDataFetcher {

    @Autowired
    lateinit var editionRepository: EditionRepository

    @Autowired
    lateinit var levelsRepository: LevelsRepository

    @Autowired
    lateinit var fileEntityRepository: FileEntityRepository

    @Autowired
    lateinit var photoAssigner: PhotoAssigner

    @DgsMutation
    @Transactional
    fun addLevel(@InputArgument editionId: Long, @InputArgument name: String, @InputArgument maximumPoints: Double,
                    @InputArgument grade: Double, @InputArgument imageFileId: Long? = null): Levels {
        val edition = editionRepository.findById(editionId).orElseThrow { IllegalArgumentException("Invalid edition ID") }
        val levelsInEdition = levelsRepository.findByEdition(edition)

        val levelImage = if (imageFileId == null){
            fileEntityRepository.findAllByFileType("image/level/sample").firstOrNull()
        } else {
            val levelsWithSameImage = levelsRepository.findByImageFile_FileId(imageFileId).filter { it.edition == edition }
            if (levelsWithSameImage.isNotEmpty()){
                throw IllegalArgumentException("Image is already used by another level")
            }
            fileEntityRepository.findByFileId(imageFileId)
        }

        if (levelsInEdition.isEmpty()){
            val level = Levels(
                levelName = name,
                minimumPoints = 0.0,
                maximumPoints = maximumPoints,
                grade = grade,
                label = "",
                edition = edition
            )
            level.ordinalNumber = 0
            level.highest = true
            level.imageFile = levelImage
            levelsRepository.save(level)
            return level
        }

        val highestLevel = levelsInEdition.maxByOrNull { it.ordinalNumber }!!

        if (highestLevel.maximumPoints >= maximumPoints){
            throw IllegalArgumentException("Maximum points must be higher than the highest level in the edition")
        }
        if (highestLevel.grade > grade){
            throw IllegalArgumentException("Grade must be higher or equal to the highest level in the edition")
        }
        if (levelsInEdition.any { it.levelName == name }){
            throw IllegalArgumentException("Level with the same name already exists in the edition")
        }


        val level = Levels(
            levelName = name,
            minimumPoints = highestLevel.maximumPoints,
            maximumPoints = maximumPoints,
            grade = grade,
            label = "",
            edition = edition
        )
        level.ordinalNumber = highestLevel.ordinalNumber + 1
        highestLevel.highest = false
        level.highest = true
        level.imageFile = levelImage
        levelsRepository.save(level)
        return level
    }

    @DgsMutation
    @Transactional
    fun assignPhotoToLevel(@InputArgument levelId: Long, @InputArgument fileId: Long?): Boolean {
        return photoAssigner.assignPhotoToAssignee(levelsRepository, "image/level", levelId, fileId)
    }
}
