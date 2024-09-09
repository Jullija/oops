import { useGroupsQuery } from "../../graphql/groups.graphql.types";

export type Group = {
  name: string;
  id: string;
  weekday: Weekday;
  time: Timestamp;
  teacher: {
    fullName: string;
    id: string;
  };
  imageId?: string;
};

export type Weekday = {
  id: string;
  name: string;
};

export type Timestamp = {
  start: string;
  end: string;
};

// TODO change editionId?: to | undefined
export const useGroupsData = (editionId: string | undefined) => {
  const { data, loading, error } = useGroupsQuery({
    variables: {
      editionId: editionId as string,
    },
    skip: !editionId,
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
        imageId: group.file?.fileId,
      };
    }) ?? [];

  return { groups, groupsLoading: loading, groupsError: error };
};
