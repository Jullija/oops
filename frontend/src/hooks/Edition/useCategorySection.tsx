import {
  AllCategoriesQuery,
  useAllCategoriesQuery,
} from "../../graphql/allCategories.graphql.types";

export type Category = AllCategoriesQuery["categories"][number];

export const useCategorySection = (editionId: number) => {
  const { data, loading, error, refetch } = useAllCategoriesQuery();

  const categories: Category[] = data?.categories ?? [];

  const selectedCategories: Category[] = categories.filter((c: Category) => {
    const found = c.categoryEditions.find(
      (ca) => ca.editionId === editionId.toString(),
    );
    return !!found;
  });

  return {
    categories,
    selectedCategories,
    loading,
    error,
    refetch,
  };
};
