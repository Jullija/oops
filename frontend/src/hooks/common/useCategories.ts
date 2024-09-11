import { useCategoriesQuery } from "../../graphql/categories.graphql.types";
import { Category } from "../Group/useGroupScreenData";
import { useEditionSelection } from "./useEditionSelection";

export const useCategories = () => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

  const { data, loading, error } = useCategoriesQuery({
    variables: { editionId: editionId as string },
    skip: !editionId,
  });

  const categories: Category[] =
    data?.categories.map((c) => {
      return {
        id: c.categoryId,
        name: c.categoryName,
        subcategories: c.subcategories.map((s) => {
          return {
            id: s.subcategoryId,
            name: s.subcategoryName,
            maxPoints: s.maxPoints,
          };
        }),
      };
    }) ?? [];

  return { categories, loading, error };
};
