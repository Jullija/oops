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
  const [addCategory, { error: addError, reset: resetAddCategoryError }] =
    useSetupAddCategoryMutation();
  const [addCategoryToEdition, { error: addToEditionError }] =
    useSetupAddCategoryToEditionMutation();
  const [
    removeCategoryFromEdition,
    { error: removeError, reset: removeErrorReset },
  ] = useSetupRemoveCategoryFormEditionMutation();

  const { categories, selectedCategories, loading, error, refetch } =
    useCategoriesSection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  const handleAddCategory = async (
    values: CategoriesFormValues,
    rows: Row[],
  ) => {
    await addCategory({
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
    if (!addError) {
      refetch();
      setIsOpen(false);
      resetAddCategoryError();
    }
  };

  const handleSelectCategoryClick = async (category: Category) => {
    const isCategorySelected = !!selectedCategories.find(
      (c) => c.categoryId === category.categoryId,
    );

    const variables = {
      variables: {
        editionId,
        categoryId: parseInt(category.categoryId),
      },
    };

    if (isCategorySelected) {
      await removeCategoryFromEdition(variables);
      if (!removeError) {
        console.log("REFETCH FORM REMOVE");
        refetch();
        removeErrorReset();
      }
    } else {
      await addCategoryToEdition(variables);
      if (!addToEditionError) {
        refetch();
        resetAddCategoryError();
      }
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
