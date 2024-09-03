import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useWeekdaysQuery } from "../../../graphql/weekdays.graphql.types";

export const useWeekdayData = () => {
  const { data, loading, error } = useWeekdaysQuery();

  const weekdays: FilterItem[] =
    data?.weekdays.map((weekday) => {
      return {
        name: weekday.weekdayName,
        id: weekday.weekdayId,
      };
    }) ?? [];

  return { weekdays, loading, error };
};
