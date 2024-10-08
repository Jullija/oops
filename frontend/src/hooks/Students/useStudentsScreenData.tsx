import { useEditionSelection } from "../common/useEditionSelection";
import { useGroupsData } from "../common/useGroupsData";
import { useUser } from "../common/useUser";
import { useStudentsData } from "./useStudentsData";

export const useStudentsScreenData = () => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

  const { groups, groupsLoading, groupsError } = useGroupsData(editionId);

  const { students, studentsLoading, studentsError } =
    useStudentsData(editionId);

  const { user } = useUser();
  const teacherId = user.userId;

  return {
    teacherId,
    groups,
    students,
    loading: groupsLoading || studentsLoading,
    error: groupsError || studentsError,
  };
};
