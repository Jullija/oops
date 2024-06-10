package backend.award

import java.util.*

enum class AwardType {
    MULTIPLICATIVE,
    ADDITIVE_NEXT,
    ADDITIVE_PREV,
    ADDITIVE;
    override fun toString(): String {
        return name.lowercase(Locale.getDefault())
    }
}
