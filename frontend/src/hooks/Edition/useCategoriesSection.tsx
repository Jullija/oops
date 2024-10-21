import { useState } from "react";

import {
  SetupCategoriesQuery,
  useSetupCategoriesQuery,
} from "../../graphql/setupCategories.graphql.types";
import { useSetupCategoryEditionAddMutation } from "../../graphql/setupCategoryEditionAdd.graphql.types";
import { useSetupCategoryEditionRemoveMutation } from "../../graphql/setupCategoryEditionRemove.graphql.types";
import { CategoriesFormValues } from "../../components/Edition/Sections/CategoriesSection/AddCategoryForm/AddCategoryForm";
import { Row } from "../../components/Edition/Sections/CategoriesSection/AddCategoryForm/SubcategoryRows";
import { useSetupCategoryCreateMutation } from "../../graphql/setupCategoryCreate.graphql.types";

export type Category = SetupCategoriesQuery["categories"][number];

export const useCategoriesSection = (editionId: number) => {
  const { data, loading, error, refetch } = useSetupCategoriesQuery();

  const categories: Category[] = data?.categories ?? [];

  const selectedCategories: Category[] = categories.filter((c: Category) => {
    const found = c.categoryEditions.find(
      (category) => category.editionId === editionId.toString(),
    );
    return !!found;
  });

  const [isOpen, setIsOpen] = useState(false);

  const [createCategory] = useSetupCategoryCreateMutation();
  const [createCategoryError, setCreateCategoryError] = useState<
    string | undefined
  >(undefined);

  const [addCategory] = useSetupCategoryEditionAddMutation();
  const [removeCategory] = useSetupCategoryEditionRemoveMutation();

  const closeDialog = () => {
    setIsOpen(false);
    setCreateCategoryError(undefined);
  };

  const handleCreate = async (values: CategoriesFormValues, rows: Row[]) => {
    try {
      await createCategory({
        variables: {
          categoryName: values.categoryName,
          canAddPoints: values.canAddPoints,
          subcategories: rows.map((row, index) => {
            return {
              label: "",
              maxPoints: row.max.toString(),
              ordinalNumber: index,
              subcategoryName: row.name,
            };
          }),
        },
      });

      refetch();
      closeDialog();
    } catch (error) {
      console.error(error);

      setCreateCategoryError(
        error instanceof Error ? error.message : "Unexpected error received.",
      );
    }
  };

  const handleSelectClick = async (category: Category) => {
    const isCategorySelected = !!selectedCategories.find(
      (c) => c.categoryId === category.categoryId,
    );

    const variables = {
      variables: {
        editionId,
        categoryId: parseInt(category.categoryId),
      },
    };

    try {
      // TODO add some kind of global error
      if (isCategorySelected) {
        await removeCategory(variables);
      } else {
        await addCategory(variables);
      }
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    categories,
    selectedCategories,
    loading,
    error,
    handleSelectClick,
    handleCreate,
    createCategoryError,
    isOpen,
    closeDialog,
    openDialog: () => setIsOpen(true),
  };
};
