import { Subcategory } from "../utils/types";

export const getSubcategories = (): Subcategory[] => {
  return subcategories;
};

export const getSubcategoriesByCategory = (
  categoryId: string
): Subcategory[] => {
  return subcategories.filter(
    (subcategory) => subcategory.categoryId === categoryId
  );
};

const subcategories: Subcategory[] = [
  { id: "1", categoryId: "1", name: "lab1" },
  { id: "2", categoryId: "2", name: "kartkówka1" },
  { id: "3", categoryId: "1", name: "lab2" },
  { id: "4", categoryId: "3", name: "wykład1" },
  { id: "5", categoryId: "4", name: "gitowe dziady" },
];
