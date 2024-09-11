import { Roles } from "./types";

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

export function hasRole(user: User, allowedRoles: Roles[]) {
  return allowedRoles.includes(user.role as Roles);
}
