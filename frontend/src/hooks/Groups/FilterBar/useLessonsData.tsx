import { useGroupTimesQuery } from "../../../graphql/groupTimes.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";
import { Timestamp } from "../useGroupsData";

// use FilterItem here
export type Lesson = {
  name: string;
  id: string;
};

export const getTimestampUniqueName = (timestamp: Timestamp) => {
  return `${timestamp.start}-${timestamp.end}`;
};

export const useLessonsData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useGroupTimesQuery({
    variables: { editionId: parseInt(selectedEdition?.editionId ?? "") },
    skip: !selectedEdition?.editionId,
  });

  const lessons: Lesson[] =
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

  return { lessons, loading, error };
};
