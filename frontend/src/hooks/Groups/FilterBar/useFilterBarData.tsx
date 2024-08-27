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

  return {
    weekdays,
    teachers,
    loading: weekdaysLoading || teachersLoading,
    error: weekdaysError || teachersError,
  };
};
