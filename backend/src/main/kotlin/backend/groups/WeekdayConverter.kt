package backend.groups

import backend.users.WeekdayEnum
import jakarta.persistence.AttributeConverter
import jakarta.persistence.Converter

@Converter(autoApply = true)
class WeekdayConverter : AttributeConverter<WeekdayEnum, String> {

    override fun convertToDatabaseColumn(attribute: WeekdayEnum?): String? {
        return attribute?.name?.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String?): WeekdayEnum? {
        return dbData?.let { WeekdayEnum.valueOf(it.uppercase()) }
    }
}