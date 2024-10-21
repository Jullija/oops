import { Dialog } from "@mui/material";
import { Styles } from "../../../../utils/Styles";
import {
  AddCategoryForm,
  CategoriesFormValues,
} from "./AddCategoryForm/AddCategoryForm";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { useState } from "react";
import { CloseHeader } from "../../../dialogs/CloseHeader";
import {
  Category,
  useCategoriesSection,
} from "../../../../hooks/Edition/useCategoriesSection";
import { useSetupAddCategoryToEditionMutation } from "../../../../graphql/setupAddCategoryToEdition.graphql.types";
import { useSetupRemoveCategoryFormEditionMutation } from "../../../../graphql/setupRemoveCategoryFromEdition.graphql.types";
import { Row } from "./AddCategoryForm/SubcategoryRows";
import { useSetupAddCategoryMutation } from "../../../../graphql/setupAddCategory.graphql.types";

type CategoriesSectionProps = {
  editionId: number;
};

export const CategoriesSection = ({ editionId }: CategoriesSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [createCategory] = useSetupAddCategoryMutation();
  const [createCategoryError, setCreateCategoryError] = useState<
    string | undefined
  >(undefined);

  const [addCategory] = useSetupAddCategoryToEditionMutation();
  const [removeCategory] = useSetupRemoveCategoryFormEditionMutation();

  const { categories, selectedCategories, loading, error, refetch } =
    useCategoriesSection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

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

  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(true)}>add category</button>

      <CategoriesList
        categories={selectedCategories}
        selectedCategories={selectedCategories}
        handleSelectCategoryClick={handleSelectClick}
        title={"Selected categories"}
      />
      <CategoriesList
        categories={categories}
        selectedCategories={selectedCategories}
        handleSelectCategoryClick={handleSelectClick}
        title={"All categories"}
      />

      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={closeDialog} />
        <AddCategoryForm
          createError={createCategoryError}
          handleAddCategory={handleCreate}
        />
      </Dialog>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};
