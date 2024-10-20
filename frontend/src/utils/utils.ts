import { Edition } from "../contexts/userContext";
import { UsersRolesType } from "../__generated__/schema.graphql.types";

type User = {
  role: string;
};

export type Category = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;
  name: string;
  maxPoints: number;
};

export const hasRole = (user: User, allowedRoles: UsersRolesType[]) => {
  return allowedRoles.includes(user.role as UsersRolesType);
};

export const isEditionActive = (edition: Edition) => {
  const now = new Date();
  // TODO where to put <=
  return new Date(edition.startDate) < now && now < new Date(edition.endDate);
};
