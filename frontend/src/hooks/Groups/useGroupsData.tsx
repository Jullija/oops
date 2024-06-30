import { useGetGroupsQuery } from "../../graphql/getGroups.graphql.types";
import { Group, SearchStudent } from "../../utils";
import { useEditionSelection } from "../common/useEditionSelection";

export const useGroupsData = () => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useGetGroupsQuery({
    variables: {
      editionId: selectedEdition?.editionId ?? "-1",
    },
  });

  const groups: Group[] | undefined = data?.edition[0].groups.map((group) => {
    return {
      name: group.groupName,
      id: group.groupsId,
    };
  });

  const students: SearchStudent[] | undefined = data?.edition[0].groups.flatMap(
    (group) =>
      group.userGroups.map((userGroup) => ({
        fullName: userGroup.user.fullName ?? undefined,
        userId: userGroup.user.userId,
      })),
  );

  return { loading, error, groups, students };
};
