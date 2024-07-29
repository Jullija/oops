import { FilterItem } from "../../components/StudentProfile/table/FilterMenu";
import {
  StudentPointsQuery,
  useStudentPointsQuery,
} from "../../graphql/studentPoints.graphql.types";

export type Points = NonNullable<
  StudentPointsQuery["getStudentPoints"]
>["subcategoryPoints"][number];

export const useStudentPointsData = (props: {
  editionId: string;
  studentId: string;
}) => {
  const { editionId, studentId } = props;

  const {
    data,
    loading: studentPointsLoading,
    error: studentPointsError,
    refetch: studentPointsRefetch,
  } = useStudentPointsQuery({
    variables: {
      editionId: parseInt(editionId),
      studentId: parseInt(studentId),
    },
  });

  const points: Points[] = data?.getStudentPoints.subcategoryPoints ?? [];

  const uniqueCategories: Map<string, FilterItem> = new Map();

  points
    .map((p) => {
      return {
        id: p.subcategory.category.categoryId.toString(),
        name: p.subcategory.category.categoryName,
      };
    })
    .forEach((entry) => {
      if (!uniqueCategories.has(entry.id)) {
        uniqueCategories.set(entry.id, entry);
      }
    });

  const filterHeaderNames: FilterItem[] =
    Array.from(uniqueCategories.values()) ?? [];

  return {
    points,
    filterHeaderNames,
    studentPointsLoading,
    studentPointsError,
    studentPointsRefetch,
  };
};
