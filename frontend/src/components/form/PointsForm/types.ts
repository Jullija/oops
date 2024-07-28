import { CategoriesQuery } from "../../../graphql/categories.graphql.types";

export type FormPoints = {
  subcategoryId: string;
  points: number;
};

export type Subcategory = NonNullable<
  CategoriesQuery["categories"][number]["subcategories"][number]
>;
