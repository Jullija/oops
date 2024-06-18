import backend.users.UsersRoles

import jakarta.persistence.AttributeConverter
import jakarta.persistence.Converter

@Converter(autoApply = true)
class UsersRolesConverter : AttributeConverter<UsersRoles, String> {

    override fun convertToDatabaseColumn(attribute: UsersRoles?): String? {
        return attribute?.name?.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String?): UsersRoles? {
        return dbData?.let { UsersRoles.valueOf(it.uppercase()) }
    }
}
