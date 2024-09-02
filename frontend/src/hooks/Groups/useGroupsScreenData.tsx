import { useGroupsData } from "./useGroupsData";
import { useTeachersData } from "./FilterBar/useTeachersData";
import { useTimestampsData } from "./FilterBar/useTimestampsData";
import { useWeekdayData } from "./FilterBar/useWeekdaysData";

export const useGroupsScreenData = () => {
  const {
    groups,
    loading: groupsLoading,
    error: groupsError,
  } = useGroupsData();

  const {
    weekdays,
    loading: weekdaysLoading,
    error: weekdaysError,
  } = useWeekdayData();

  const {
    teachers,
    loading: teachersLoading,
    error: teachersError,
  } = useTeachersData();

  const {
    timestamps,
    loading: timestampsLoading,
    error: timestampsError,
  } = useTimestampsData();

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
