import { PointsBarProps } from "../../components/PointsBar";
import { useCategoriesPointsQuery } from "../../graphql/categoriesPoints.graphql.types";

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

  const categories: PointsBarProps[] =
    data?.getSumOfPointsForStudentByCategory.map((category) => {
      return {
        label: category.category.categoryName,
        bounds: {
          upper: category.maxPoints,
        },
        points: category.sumOfAll,
      };
    }) ?? [];

  return { categories, categoriesLoading, categoriesError, categoriesRefetch };
};
