import { FilterItem } from "../../../components/Groups/FilterBar/FilterOptionsSection";
import { useTeachersQuery } from "../../../graphql/teachers.graphql.types";

export const useTeachersData = (editionId: string | undefined) => {
  const { data, loading, error } = useTeachersQuery({
    variables: { editionId: editionId as string },
    skip: !editionId,
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
