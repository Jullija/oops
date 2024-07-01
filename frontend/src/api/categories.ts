import { Category } from "../utils/types";

export const getCategories = (): Category[] => {
  return categories;
};

export const getCategory = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

const categories: Category[] = [
  { id: "1", name: "Laboratorium" },
  { id: "2", name: "Kartkówka" },
  { id: "3", name: "Wykład" },
  { id: "4", name: "Event" },
];
