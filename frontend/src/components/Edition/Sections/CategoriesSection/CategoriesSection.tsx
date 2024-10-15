import { Dialog } from "@mui/material";
import { useAddCategoryMutation } from "../../../../graphql/addCategory.graphql.types";
import {
  AllCategoriesQuery,
  useAllCategoriesQuery,
} from "../../../../graphql/allCategories.graphql.types";
import { Styles } from "../../../../utils/Styles";
import { AddCategoryForm, CategoriesFormValues } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { useState } from "react";
import { CloseHeader } from "../../../dialogs/CloseHeader";

export type Category = AllCategoriesQuery["categories"][number];

export const CategoriesSection = () => {
  const { data, loading, error, refetch } = useAllCategoriesQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [addCategory, { error: addError, reset }] = useAddCategoryMutation();

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

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
      reset();
    }
  };

  const handleSelectCategoryClick = (category: Category) => {
    const wasSelected = !!selectedCategories.find(
      (c) => c.categoryId === category.categoryId,
    );
    const updatedSelectedCategories = wasSelected
      ? selectedCategories.filter((c) => c.categoryId !== category.categoryId)
      : [...selectedCategories, category];
    setSelectedCategories(updatedSelectedCategories);
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
        categories={data?.categories ?? []}
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
