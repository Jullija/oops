import { useGroupsByEditionQuery } from "../../graphql/groupsByEdition.graphql.types";
import { Group, ShortStudent } from "../../utils";
import { useEditionSelection } from "../common/useEditionSelection";

export const useGroupsData = () => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useGroupsByEditionQuery({
    variables: {
      editionId: selectedEdition?.editionId as string,
    },
    skip: !selectedEdition,
  });

  const groups: Group[] | undefined = data?.edition[0].groups.map((group) => {
    return {
      name: group.groupName,
      id: group.groupsId,
    };
  });

  const students: ShortStudent[] | undefined = data?.edition[0].groups.flatMap(
    (group) =>
      group.userGroups.map((userGroup) => ({
        fullName: userGroup.user.fullName ?? undefined,
        id: userGroup.user.userId,
      })),
  );

  return { loading, error, groups, students };
};
