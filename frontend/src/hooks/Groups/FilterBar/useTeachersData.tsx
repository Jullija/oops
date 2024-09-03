import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";

export const useTeachersData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useTeachersQuery({
    variables: { editionId: selectedEdition?.editionId ?? "" },
    skip: !selectedEdition?.editionId,
  });

  // TODO userByTeacherId - does it has to be nullable?
  const teachers: FilterItem[] =
    data?.groups.map((teacher) => {
      return {
        name: teacher.userByTeacherId?.fullName ?? "-",
        id: teacher.userByTeacherId?.userId ?? "-",
      };
    }) ?? [];

  return { teachers, loading, error };
};
