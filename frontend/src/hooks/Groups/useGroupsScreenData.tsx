import { useEditionSelection } from "../common/useEditionSelection";
import { useGroupsData } from "../common/useGroupsData";
import { useTeachersData } from "./FilterBar/useTeachersData";
import { useTimestampsData } from "./FilterBar/useTimestampsData";
import { useWeekdayData } from "./FilterBar/useWeekdaysData";

export const useGroupsScreenData = () => {
  // TODO export editionId
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

  const { groups, groupsLoading, groupsError } = useGroupsData(editionId);

  const {
    weekdays,
    loading: weekdaysLoading,
    error: weekdaysError,
  } = useWeekdayData();

  const {
    teachers,
    loading: teachersLoading,
    error: teachersError,
  } = useTeachersData(editionId);

  const {
    timestamps,
    loading: timestampsLoading,
    error: timestampsError,
  } = useTimestampsData(editionId);

  return {
    groups,
    weekdays,
    teachers,
    timestamps,
    loading:
      groupsLoading || weekdaysLoading || teachersLoading || timestampsLoading,
    error: groupsError || weekdaysError || teachersError || timestampsError,
  };
};
