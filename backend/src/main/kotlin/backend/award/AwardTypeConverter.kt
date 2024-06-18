package backend.award

import jakarta.persistence.AttributeConverter
import jakarta.persistence.Converter

@Converter(autoApply = true)
class AwardTypeConverter : AttributeConverter<AwardType, String> {

    override fun convertToDatabaseColumn(attribute: AwardType?): String? {
        return attribute?.name?.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String?): AwardType? {
        return dbData?.let { AwardType.valueOf(it.uppercase()) }
    }
}
