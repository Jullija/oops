import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";

export const useTeachersData = (editionId: string | undefined) => {
  const { data, loading, error } = useTeachersQuery({
    variables: { editionId: editionId as string },
    skip: !editionId,
  });

  const teachers: FilterItem[] =
    data?.groups.map((teacher) => {
      return {
        name: teacher.teacher.fullName ?? "-",
        id: teacher.teacher.userId ?? "-",
      };
    }) ?? [];

  return { teachers, loading, error };
};
