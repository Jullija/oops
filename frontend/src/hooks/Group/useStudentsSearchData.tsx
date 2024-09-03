import { useStudentsInGroupQuery } from "../../graphql/studentsInGroup.graphql.types";
import { ShortStudent } from "../../utils/types";

export const useStudentsSearchData = (groupId: string) => {
  const { data, loading, error } = useStudentsInGroupQuery({
    variables: { groupId },
  });

  const students: ShortStudent[] | undefined = data?.userGroups.map((group) => {
    return {
      fullName: group.user.fullName ?? "-",
      id: group.user.userId,
    };
  });

  return { students, loading, error };
};
