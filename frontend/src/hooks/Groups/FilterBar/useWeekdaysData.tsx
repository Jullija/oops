import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useWeekdaysQuery } from "../../../graphql/weekdays.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";

export const useWeekdayData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useWeekdaysQuery({
    variables: { editionId: parseInt(selectedEdition?.editionId ?? "") },
    skip: !selectedEdition?.editionId,
  });

  const weekdays: FilterItem[] =
    data?.getPossibleGroupsWeekdays.map((name) => {
      return {
        name,
        id: name,
      };
    }) ?? [];

  return { weekdays, loading, error };
};
