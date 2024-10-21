import { useState } from "react";
import { SubcategoriesFormValues } from "../../../components/Edition/Sections/CategoriesSection/AddCategoryForm/SubcategoryRow";
import { FormSubcategory } from "../../../components/Edition/Sections/CategoriesSection/AddCategoryForm/SubcategoryRows";

export const useSubcategories = () => {
  const [subcategories, setSubcategories] = useState<FormSubcategory[]>([]);

  const handleAdd = (subcategory: SubcategoriesFormValues) => {
    setSubcategories((prev) => [
      ...prev,
      {
        name: subcategory.name,
        ordinal: subcategory.ordinal,
        max: subcategory.maxPoints,
      },
    ]);
  };

  const handleDelete = (ordinal: number) => {
    const updatedRows = subcategories
      .filter((_, index) => index + 1 !== ordinal)
      .map((row, index) => {
        return { ...row, ordinal: index + 1 };
      });
    setSubcategories(updatedRows);
  };

  const handleUp = (ordinal: number) => {
    const index = ordinal - 1;

    const updated = subcategories.map((row, i) => {
      if (i === index - 1) return subcategories[index];
      if (i === index) return subcategories[index - 1];
      return row;
    });

    setSubcategories(updated);
  };

  const handleDown = (ordinal: number) => {
    const index = ordinal - 1;

    const updated = subcategories.map((row, i) => {
      if (i === index) return subcategories[index + 1];
      if (i === index + 1) return subcategories[index];
      return row;
    });

    setSubcategories(updated);
  };

  return {
    subcategories,
    handleAdd,
    handleDelete,
    handleDown,
    handleUp,
  };
};
