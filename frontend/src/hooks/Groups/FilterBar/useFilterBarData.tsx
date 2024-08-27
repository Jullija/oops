import { useLessonsData } from "./useLessonsData";
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
    lessons,
    loading: lessonsLoading,
    error: lessonsError,
  } = useLessonsData();

  return {
    weekdays,
    teachers,
    lessons,
    loading: weekdaysLoading || teachersLoading || lessonsLoading,
    error: weekdaysError || teachersError || lessonsError,
  };
};
