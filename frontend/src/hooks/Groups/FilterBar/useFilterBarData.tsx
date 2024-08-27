import { useWeekdayData } from "./useFilterData";

export const useFilterBarData = () => {
  const { weekdays, loading: daysLoading, error: daysError } = useWeekdayData();

  return { weekdays, loading: daysLoading, error: daysError };
};
