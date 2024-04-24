import { Category } from "../utils/types";

export const getAllCategories = (): Category[] => {
  return categories;
};

const categories = [
  { id: "1", name: "Labolatorium" },
  { id: "2", name: "Kartkówka" },
  { id: "3", name: "Wykład" },
  { id: "4", name: "Event" },
];
