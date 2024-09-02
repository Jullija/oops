import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";
import { useEditionSelection } from "../../common/useEditionSelection";

// use FilterItem here
export type Teacher = {
  name: string;
  id: string;
};

export const useTeachersData = () => {
  const { selectedEdition } = useEditionSelection();
  const { data, loading, error } = useTeachersQuery({
    variables: { editionId: selectedEdition?.editionId ?? "" },
    skip: !selectedEdition?.editionId,
  });

  const teachers: Teacher[] =
    data?.users.map((user) => {
      return { name: user.fullName ?? "-", id: user.userId };
    }) ?? [];

  return { teachers, loading, error };
};
