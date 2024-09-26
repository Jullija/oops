import { Edition } from "../contexts/userEditionsContext";
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

export const hasRole = (user: User, allowedRoles: Roles[]) => {
  return allowedRoles.includes(user.role as Roles);
};

export const isActive = (edition: Edition) => {
  const now = new Date();
  // TODO where to put <=
  return new Date(edition.startDate) < now && now < new Date(edition.endDate);
};
