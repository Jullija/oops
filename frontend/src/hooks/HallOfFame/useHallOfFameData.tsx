import { HallOfFameStudentData } from "../../components/hallOfFame/StudentCard";
import { useHallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { Roles } from "../../router/paths";
import { useEditionSelection } from "../common/useEditionSelection";
import { useUser } from "../common/useUser";

export const useHallOfFameData = () => {
  const { user } = useUser();
  const { selectedEdition } = useEditionSelection();

  const { loading, error, data } = useHallOfFameQuery({
    variables: { editionId: selectedEdition?.editionId },
    skip: !selectedEdition,
  });

  const students: HallOfFameStudentData[] =
    data?.hallOfFame.map((student) => {
      return {
        id: student.userId ?? "-",
        avatarId: "-",
        nick: student.nick ?? "-",
        animalId: "-",
        level: -1,
        totalPoints: student?.sumOfPoints ?? -1,
      };
    }) ?? [];

  return {
    students,
    highlightedStudentId: user.role === Roles.STUDENT ? user.userId : undefined,
    loading,
    error,
  };
};
