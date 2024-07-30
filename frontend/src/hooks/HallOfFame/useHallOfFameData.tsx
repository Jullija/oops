import { HallOfFameStudentData } from "../../components/hallOfFame/StudentCard";
import { useHallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { Roles } from "../../router/paths";
import { useEditionSelection } from "../common/useEditionSelection";
import { useUser } from "../common/useUser";

export const MY_GROUP = "my_group";
export const ALL_STUDENTS = "all_students";

export const useHallOfFameData = () => {
  const { selectedEdition } = useEditionSelection();
  const { user } = useUser();

  const { loading, error, data } = useHallOfFameQuery({
    variables: { editionId: selectedEdition?.editionId },
    skip: !selectedEdition,
  });

  const students: HallOfFameStudentData[] =
    data?.hallOfFame.map((student, index) => {
      return {
        position: index + 1,
        id: student.userId ?? "-",
        avatarId: "-",
        nick: student.nick ?? "-",
        animalId: "-",
        level: -1,
        totalPoints: student?.sumOfPoints ?? -1,
        groupId: index % 2 === 1 ? MY_GROUP : ALL_STUDENTS,
      };
    }) ?? [];

  const highlightedStudent = students.find((student) => {
    return student.id === user.userId;
  });

  return {
    students,
    highlightedStudent:
      user.role === Roles.STUDENT
        ? ({
            ...highlightedStudent,
            groupId: MY_GROUP,
          } as HallOfFameStudentData)
        : undefined,
    loading,
    error,
  };
};
