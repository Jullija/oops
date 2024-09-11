import { useGroupPointsQuery } from "../../graphql/groupPoints.graphql.types";

export type Category = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;
  name: string;
  maxPoints: number;
};

export type GroupTableRow = {
  student: Student;
  subcategories: SubcategoryPoints[];
};

type Student = {
  id: string;
  fullName: string;
  index: number;
};

export type SubcategoryPoints = {
  pure: number | undefined;
  subcategoryId: string;
  categoryId: string;
};

export const useGroupScreenData = (groupId: number | undefined) => {
  const { data, loading, error } = useGroupPointsQuery({
    variables: { groupId: groupId as number },
    skip: !groupId,
  });

  const categories: Category[] =
    data?.getUsersInGroupWithPoints[0]?.categoriesPoints.map((item) => {
      const category = item.category;
      const subcategoryPoints = item.subcategoryPoints;
      return {
        id: category.categoryId,
        name: category.categoryName,
        subcategories:
          subcategoryPoints.map((points) => {
            return {
              id: points.subcategory.subcategoryId,
              name: points.subcategory.subcategoryName,
              maxPoints: points.subcategory.maxPoints,
            };
          }) ?? [],
      };
    }) ?? [];

  const rows: GroupTableRow[] =
    data?.getUsersInGroupWithPoints.map((userPoints) => {
      const user = userPoints?.user;
      return {
        student: {
          id: user?.userId ?? "-1",
          fullName: `${user?.firstName ?? "-"} ${user?.secondName ?? "-"}`,
          index: user?.indexNumber ?? -1,
        },
        subcategories:
          userPoints?.categoriesPoints.flatMap((catPoints) =>
            catPoints.subcategoryPoints.map((subPoints) => {
              return {
                pure: subPoints.points.purePoints?.value,
                subcategoryId: subPoints.subcategory.subcategoryId,
                categoryId: catPoints.category.categoryId,
              };
            }),
          ) ?? [],
      };
    }) ?? [];

  return {
    rows,
    categories,
    loading,
    error,
  };
};
