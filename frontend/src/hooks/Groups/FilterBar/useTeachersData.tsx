import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";

export const useTeachersData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useTeachersQuery({
    variables: { editionId: selectedEdition?.editionId ?? "" },
    skip: !selectedEdition?.editionId,
  });

  const teachers: FilterItem[] =
    data?.users.map((user) => {
      return { name: user.fullName ?? "-", id: user.userId };
    }) ?? [];

  return { teachers, loading, error };
};
