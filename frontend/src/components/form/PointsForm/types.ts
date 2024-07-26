import { CategoriesQuery } from "../../../graphql/categories.graphql.types";

export type FormPoints = {
  studentId: string;
  subcategoryId: string;
  points: number;
};

export type Subcategory = NonNullable<
  CategoriesQuery["categories"][number]["subcategories"][number]
>;
