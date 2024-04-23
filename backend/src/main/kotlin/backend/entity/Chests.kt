package backend.entity
import jakarta.persistence.*


@Entity
@Table(name = "Chests")
class Chests (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chestId")
    val chestId: Long = 0,

    @Column(name = "type", nullable = false)
    var type: String,
){
    constructor():this(
        type = ""
    )


}