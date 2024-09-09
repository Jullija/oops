import { useGroupPointsQuery } from "../../graphql/groupPoints.graphql.types";

export type GradeCategory = {
  id: string;
  name: string;
  subcategories: GradeSubcategory[];
};

export type GradeSubcategory = {
  id: string;
  name: string;
};

export type GradeRowData = {
  student: Student;
  subcategories: SubcategoryPoints[];
};

type Student = {
  id: string;
  fullName: string;
  index: number;
};

type SubcategoryPoints = {
  pure: number;
  subcategoryId: string;
  categoryId: string;
};

export const useGroupScreenData = (groupId: number | undefined) => {
  const {
    data,
    loading: gLoading,
    error: gError,
  } = useGroupPointsQuery({
    variables: { groupId: groupId as number },
    skip: !groupId,
  });

  const categories: GradeCategory[] =
    data?.getUsersInGroupWithPoints[0]?.categoriesPoints.map((p) => {
      return {
        id: p.category.categoryId,
        name: p.category.categoryName,
        subcategories:
          p.subcategoryPoints.map((s) => {
            return {
              id: s.subcategory.subcategoryId,
              name: s.subcategory.subcategoryName,
            };
          }) ?? [],
      };
    }) ?? [];

  const rowsData: GradeRowData[] =
    data?.getUsersInGroupWithPoints.map((item) => {
      return {
        student: {
          id: item?.user.userId ?? "-1",
          fullName: `${item?.user.firstName ?? "-"} ${item?.user.secondName ?? "-"}`,
          index: item?.user.indexNumber ?? -1,
        },
        subcategories:
          item?.categoriesPoints.flatMap((c) =>
            c.subcategoryPoints.map((sb) => {
              return {
                pure: sb.points.purePoints?.value ?? 0,
                subcategoryId: sb.subcategory.subcategoryId,
                categoryId: c.category.categoryId,
              };
            }),
          ) ?? [],
      };
    }) ?? [];

  return {
    data: rowsData,
    categories,
    loading: gLoading,
    error: gError,
  };
};
