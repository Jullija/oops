import { useGroupTimestampsQuery } from "../../../graphql/groupTimestamps.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";
import { Timestamp } from "../useGroupsData";

export type FilterItem = {
  id: string;
  name: string;
};

export const getTimestampUniqueName = (timestamp: Timestamp) => {
  return `${timestamp.start}-${timestamp.end}`;
};

export const useTimestampsData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useGroupTimestampsQuery({
    variables: { editionId: parseInt(selectedEdition?.editionId ?? "") },
    skip: !selectedEdition?.editionId,
  });

  const timestamps: FilterItem[] =
    data?.getPossibleGroupsTimeSpans.map((timestamp) => {
      const timestampName = getTimestampUniqueName({
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
