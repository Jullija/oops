import { Category } from "../utils";

export const getCategories = (): Category[] => {
  return categories;
};

const categories: Category[] = [
  { id: "1", name: "Labolatorium" },
  { id: "2", name: "Kartkówka" },
  { id: "3", name: "Wykład" },
  { id: "4", name: "Event" },
];
