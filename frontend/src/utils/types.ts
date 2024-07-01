import { UserPointsQuery } from "../graphql/userPoints.graphql.types";

export type Student = {
  id: string;
  name: string;
  level: number;
};

export type Provider = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Subcategory = {
  id: string;
  categoryId: string;
  name: string;
};

export type Points = {
  id: string;
  category: Category;
  subcategory: Subcategory;
  student: Student;
  provider: Provider;
  number: number;
};

export type Group = {
  name: string;
  id: string;
};

export type ShortStudent = {
  fullName?: string;
  id: string;
};

export enum Roles {
  ADMIN = "admin",
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

export type UserPoints = NonNullable<UserPointsQuery["usersByPk"]>["points"];
