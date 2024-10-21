import { Dialog } from "@mui/material";
import { Styles } from "../../../../utils/Styles";
import { AddCategoryForm } from "./AddCategoryForm/AddCategoryForm";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { CloseHeader } from "../../../dialogs/CloseHeader";
import { useCategoriesSection } from "../../../../hooks/Edition/useCategoriesSection";

type CategoriesSectionProps = {
  editionId: number;
};

export const CategoriesSection = ({ editionId }: CategoriesSectionProps) => {
  const {
    categories,
    selectedCategories,
    loading,
    error,
    handleSelectClick,
    handleCreate,
    createCategoryError,
    isOpen,
    closeDialog,
    openDialog,
  } = useCategoriesSection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <button onClick={openDialog}>add category</button>

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
