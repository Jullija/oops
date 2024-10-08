import { PointsBarProps } from "../../components/PointsBar";
import { useCategoriesPointsQuery } from "../../graphql/categoriesPoints.graphql.types";

export const useCategoriesCardData = (props: {
  editionId: string | undefined;
  studentId: string | undefined;
}) => {
  const { editionId, studentId } = props;

  const { data, loading, error, refetch } = useCategoriesPointsQuery({
    variables: {
      editionId: parseInt(editionId as string),
      studentId: parseInt(studentId as string),
    },
    skip: !editionId || !studentId,
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

  return {
    categories,
    categoriesLoading: loading,
    categoriesError: error,
    categoriesRefetch: refetch,
  };
};
