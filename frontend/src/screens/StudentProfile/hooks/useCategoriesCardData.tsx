import { PointsBarProps } from "../../../components/PointsBar";
import { useCategoriesPointsQuery } from "../../../graphql/categoriesPoints.graphql.types";

export const useCategoriesCardData = (props: {
  editionId: string;
  studentId: string;
}) => {
  const { editionId, studentId } = props;

  const {
    data,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: categoriesRefetch,
  } = useCategoriesPointsQuery({
    variables: {
      editionId: parseInt(editionId),
      studentId: parseInt(studentId),
    },
  });

  // why so many undefines here
  const categories: PointsBarProps[] =
    data?.getSumOfPointsForStudentByCategory?.map((cat) => {
      return {
        label: cat?.category?.categoryName ?? "-",
        bounds: {
          upper: cat?.maxPoints ?? 1,
        },
        points: cat?.sumOfAll ?? 0,
      };
    }) ?? [];

  return { categories, categoriesLoading, categoriesError, categoriesRefetch };
};
