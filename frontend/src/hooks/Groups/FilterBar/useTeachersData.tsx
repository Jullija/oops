import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";
import { FilterItem } from "./useTimestampsData";

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
