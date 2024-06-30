import { useGetGroupsQuery } from "../../graphql/getGroups.graphql.types";
import { useEditionSelection } from "../common/useEditionSelection";

export type GroupData = {
  name: string;
  id: string;
};

export type SearchStudentData = {
  fullName?: string;
  userId: string;
};

export const useGroupsData = () => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useGetGroupsQuery({
    variables: {
      editionId: selectedEdition?.editionId ?? "-1",
    },
  });

  const groups: GroupData[] | undefined = data?.edition[0].groups.map(
    (group) => {
      return {
        name: group.groupName,
        id: group.groupsId,
      };
    },
  );

  const students: SearchStudentData[] | undefined =
    data?.edition[0].groups.flatMap((group) =>
      group.userGroups.map((userGroup) => ({
        fullName: userGroup.user.fullName ?? undefined,
        userId: userGroup.user.userId,
      })),
    );

  return { loading, error, groups, students };
};
