import { HallOfFameStudentData } from "../../components/hallOfFame/HallOfFameStudentCard";
import { useHallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { Roles, RolesToUsersRolesTypeMap } from "../../utils/types";
import { useEditionSelection } from "../common/useEditionSelection";
import { useUser } from "../common/useUser";

export const useHallOfFameData = () => {
  const { selectedEdition } = useEditionSelection();
  const { user } = useUser();

  const { loading, error, data } = useHallOfFameQuery({
    variables: { editionId: selectedEdition?.editionId },
    skip: !selectedEdition,
  });

  // TODO backend - missing avatarId and animalId (photos)
  // it is a view so there is no way to avoid nulls
  // TODO maybe it shouldn't be view
  const students: HallOfFameStudentData[] =
    data?.hallOfFame.map((student, index) => {
      return {
        position: index + 1,
        id: student.userId ?? "",
        nick: student.nick ?? "",
        levelName: student.levelName ?? "",
        totalPoints: student?.sumOfPoints ?? -1,
        groupId: student.groupsId ?? "",
        avatarImgId: student.userImageId ?? undefined,
        levelImgId: student.levelImageId ?? undefined,
      };
    }) ?? [];

  const highlightedStudent = students.find((student) => {
    return student.id === user.userId;
  });

  return {
    isUserRoleStudent: user.role === RolesToUsersRolesTypeMap[Roles.STUDENT],
    students,
    highlightedStudent:
      user.role === RolesToUsersRolesTypeMap[Roles.STUDENT]
        ? highlightedStudent
        : undefined,
    loading,
    error,
  };
};
