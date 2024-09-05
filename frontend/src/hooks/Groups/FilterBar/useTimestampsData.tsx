import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useGroupTimestampsQuery } from "../../../graphql/groupTimestamps.graphql.types";
import { Timestamp } from "../../common/useGroupsData";

// assuming backend data is unique
export const getTimestampUniqueString = (timestamp: Timestamp) => {
  return `${timestamp.start}-${timestamp.end}`;
};

export const useTimestampsData = (editionId: string | undefined) => {
  const { data, loading, error } = useGroupTimestampsQuery({
    variables: { editionId: parseInt(editionId as string) },
    skip: !editionId,
  });

  const timestamps: FilterItem[] =
    data?.getPossibleGroupsTimeSpans.map((timestamp) => {
      const timestampName = getTimestampUniqueString({
        start: timestamp.startTime,
        end: timestamp.endTime,
      });
      return {
        name: timestampName,
        id: timestampName,
      };
    }) ?? [];

  return { timestamps, loading, error };
};
