import { PointsFormValues } from "../../components/StudentProfile/PointsForm/PointsForm";
import { useFormCategoriesQuery } from "../../graphql/formCategories.graphql.types";
import { Category } from "../../utils/utils";
import { useEditionSelection } from "./useEditionSelection";

export const useFormCategories = () => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

  const { data, loading, error } = useFormCategoriesQuery({
    variables: { editionId: editionId as string },
    skip: !editionId,
  });

  const categories: Category[] =
    data?.categories
      .filter((c) => c.canAddPoints)
      .map((c) => {
        return {
          id: c.categoryId,
          name: c.categoryName,
          subcategories: c.subcategories.map((s) => {
            return {
              id: s.subcategoryId,
              name: s.subcategoryName,
              maxPoints: parseFloat(s.maxPoints),
            };
          }),
        };
      }) ?? [];

  const formInitialValues: PointsFormValues = {
    categoryId: categories[0].id,
    points: 0,
    subcategoryId: categories[0].subcategories[0].id,
  };

  return { categories, formInitialValues, loading, error };
};
