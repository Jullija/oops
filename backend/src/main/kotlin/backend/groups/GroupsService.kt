package backend.groups

import org.springframework.stereotype.Service

@Service
class GroupsService(
    private val groupsRepository: GroupsRepository
){

}