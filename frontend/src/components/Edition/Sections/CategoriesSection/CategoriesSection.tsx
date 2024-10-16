import { Dialog } from "@mui/material";
import { useAddCategoryMutation } from "../../../../graphql/addCategory.graphql.types";
import { Styles } from "../../../../utils/Styles";
import { AddCategoryForm, CategoriesFormValues } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { useState } from "react";
import { CloseHeader } from "../../../dialogs/CloseHeader";
import {
  Category,
  useCategorySection,
} from "../../../../hooks/Edition/useCategorySection";
import { useSetupAddCategoryToEditionMutation } from "../../../../graphql/setupAddCategoryToEdition.graphql.types";

type CategoriesSectionProps = {
  editionId: number;
};

export const CategoriesSection = ({ editionId }: CategoriesSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addCategory, { error: addError, reset: resetAddCategoryError }] =
    useAddCategoryMutation();
  const [addCategoryToEdition, { error: addToEditionError }] =
    useSetupAddCategoryToEditionMutation();

  const { categories, selectedCategories, loading, error, refetch } =
    useCategorySection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  const handleAddCategory = async (values: CategoriesFormValues) => {
    await addCategory({
      variables: {
        categoryName: values.categoryName,
        canAddPoints: values.canAddPoints,
      },
    });
    if (!addError) {
      refetch();
      setIsOpen(false);
      resetAddCategoryError();
    }
  };

  const handleSelectCategoryClick = async (category: Category) => {
    await addCategoryToEdition({
      variables: {
        editionId,
        categoryId: parseInt(category.categoryId),
      },
    });
    if (!addToEditionError) {
      refetch();
      resetAddCategoryError();
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(true)}>add category</button>

      <CategoriesList
        categories={selectedCategories}
        selectedCategories={selectedCategories}
        handleSelectCategoryClick={handleSelectCategoryClick}
        title={"Selected categories"}
      />
      <CategoriesList
        categories={categories}
        selectedCategories={selectedCategories}
        handleSelectCategoryClick={handleSelectCategoryClick}
        title={"All categories"}
      />

      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={() => setIsOpen(false)} />
        <AddCategoryForm
          createError={addError?.message}
          handleAddCategory={handleAddCategory}
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
