import {
  SetupCategoriesQuery,
  useSetupCategoriesQuery,
} from "../../graphql/setupCategories.graphql.types";

export type Category = SetupCategoriesQuery["categories"][number];

export const useCategoriesSection = (editionId: number) => {
  const { data, loading, error, refetch } = useSetupCategoriesQuery();

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
