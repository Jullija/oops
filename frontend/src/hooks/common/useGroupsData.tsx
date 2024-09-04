import { useGroupsQuery } from "../../graphql/groups.graphql.types";
import { useEditionSelection } from "./useEditionSelection";

export type Group = {
  name: string;
  id: string;
  weekday: Weekday;
  time: Timestamp;
  teacher: { fullName: string; id: string };
};

export type Weekday = {
  id: string;
  name: string;
};

export type Timestamp = {
  start: string;
  end: string;
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
        weekday: {
          id: group.weekday.weekdayId,
          name: group.weekday.weekdayName,
        },
        time: { start: group.startTime, end: group.endTime },
        teacher: {
          // firstName and secondName is not nullable - hasura computes it so practically it will never be null
          // why userByTeacherId is null
          fullName: group.userByTeacherId?.fullName as string,
          id: group.userByTeacherId?.userId as string,
        },
      };
    }) ?? [];

  return { groups, loading, error };
};
