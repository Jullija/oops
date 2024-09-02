import { useTimestampsData } from "./useTimestampsData";
import { useTeachersData } from "./useTeacherData";
import { useWeekdayData } from "./useWeekdaysData";

export const useFilterBarData = () => {
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
    loading: timestampsLoaging,
    error: timestampsLoading,
  } = useTimestampsData();

  return {
    weekdays,
    teachers,
    timestamps,
    loading: weekdaysLoading || teachersLoading || timestampsLoaging,
    error: weekdaysError || teachersError || timestampsLoading,
  };
};
