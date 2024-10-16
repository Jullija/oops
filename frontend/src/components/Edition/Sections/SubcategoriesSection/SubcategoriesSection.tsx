import { Dialog } from "@mui/material";
import { Styles } from "../../../../utils/Styles";
import {
  AddSubcategoryForm,
  SubcategoryFormValues,
} from "./AddSubcategoryForm";
import { SubcategoriesList } from "./CategoriesList/SubcategoriesList";
import { useState } from "react";
import { CloseHeader } from "../../../dialogs/CloseHeader";
import {
  Subcategory,
  useSubcategoriesSection,
} from "../../../../hooks/Edition/useSubcategoriesSection";

type SubcategoriesSectionProps = {
  editionId: number;
};

export const SubcategoriesSection = ({
  editionId,
}: SubcategoriesSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [addCategory, { error: addError, reset: resetAddCategoryError }] =
  //   useAddCategoryMutation();
  // const [addCategoryToEdition, { error: addToEditionError }] =
  //   useSetupAddCategoryToEditionMutation();

  const { subcategories, selectedSubcategories, loading, error } =
    useSubcategoriesSection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  const handleAddCategory = async (values: SubcategoryFormValues) => {
    console.log("handle add level to implement: ", values);
    // await addCategory({
    //   variables: {
    //     categoryName: values.categoryName,
    //     canAddPoints: values.canAddPoints,
    //   },
    // });
    // if (!addError) {
    //   refetch();
    //   setIsOpen(false);
    //   resetAddCategoryError();
    // }
  };

  const handleSelectCategoryClick = async (subcategory: Subcategory) => {
    console.log("handle select subcategory to implement: ", subcategory);
    // await addCategoryToEdition({
    //   variables: {
    //     editionId,
    //     categoryId: parseInt(category.categoryId),
    //   },
    // });
    // if (!addToEditionError) {
    //   refetch();
    //   resetAddCategoryError();
    // }
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(true)}>add subcategory</button>

      <SubcategoriesList
        subcategories={selectedSubcategories}
        selectedSubcategories={selectedSubcategories}
        handleSelectSubcategoryClick={handleSelectCategoryClick}
        title={"Selected categories"}
      />
      <SubcategoriesList
        subcategories={subcategories}
        selectedSubcategories={selectedSubcategories}
        handleSelectSubcategoryClick={handleSelectCategoryClick}
        title={"All categories"}
      />

      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={() => setIsOpen(false)} />
        <AddSubcategoryForm
          // TODO createError={addError?.message}
          createError={undefined}
          handleAddSubcategory={handleAddCategory}
        />
      </Dialog>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 12,
  },
};
