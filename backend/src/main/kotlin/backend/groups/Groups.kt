package backend.groups

import backend.edition.Edition
import backend.files.FileEntity
import backend.userGroups.UserGroups
import backend.users.Users
import backend.users.WeekdayEnum
import jakarta.persistence.*
import java.sql.Time

@Entity
@Table(name = "groups")
class Groups(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "groups_id")
    val groupsId: Long = 0,

    @Column(name = "group_name", nullable = false)
    var groupName: String,

    @Column(name = "label", nullable = true)
    var label: String = "",

    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    val userGroups: Set<UserGroups> = HashSet(),

    @Column(name = "weekday", nullable = false)
    @Convert(converter = WeekdayConverter::class)
    var weekday: WeekdayEnum,

    @Column(name = "start_time", nullable = false)
    var startTime: Time,

    @Column(name = "end_time", nullable = false)
    var endTime: Time,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edition_id", nullable = false)
    var edition: Edition,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_file_id")
    var imageFile: FileEntity? = null
) {
    constructor() : this(
        groupName = "",
        label = "",
        weekday = WeekdayEnum.MONDAY,
        startTime = Time(0),
        endTime = Time(0),
        edition = Edition()
    )
}
