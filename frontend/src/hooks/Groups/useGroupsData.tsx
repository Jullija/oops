import { useGroupsQuery } from "../../graphql/groups.graphql.types";
import { useEditionSelection } from "../common/useEditionSelection";

export type Group = {
  name: string;
  id: string;
  weekday: string;
  time: { start: string; end: string };
  teacher: { fullName: string; id: string };
};

export const useGroupsData = () => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useGroupsQuery({
    variables: {
      editionId: selectedEdition?.editionId as string,
    },
    skip: !selectedEdition,
  });

  const groups: Group[] =
    data?.editionByPk?.groups.map((group) => {
      return {
        name: group.groupName,
        id: group.groupsId,
        weekday: group.weekday,
        time: { start: group.startTime, end: group.endTime },
        teacher: {
          // firstName and secondName is not nullable - hasura computes it so practically it will never be null
          fullName: group.userGroups[0].user.fullName as string,
          id: group.userGroups[0].user.userId,
        },
      };
    }) ?? [];

  return { groups, loading, error };
};
