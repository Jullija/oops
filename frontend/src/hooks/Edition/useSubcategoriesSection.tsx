import {
  SetupSubcategoriesQuery,
  useSetupSubcategoriesQuery,
} from "../../graphql/setupSubcategories.graphql.types";

export type Subcategory = SetupSubcategoriesQuery["subcategories"][number];

export const useSubcategoriesSection = (editionId: number) => {
  const { data, loading, error, refetch } = useSetupSubcategoriesQuery();

  const subcategories: Subcategory[] = data?.subcategories ?? [];

  const selectedSubcategories: Subcategory[] = subcategories.filter(
    (s: Subcategory) => {
      return s.editionId === editionId.toString();
    },
  );

  return {
    subcategories,
    selectedSubcategories,
    loading,
    error,
    refetch,
  };
};
