import { Roles } from "./types";

type User = {
  role: string;
};

export function hasRole(user: User, allowedRoles: Roles[]) {
  return allowedRoles.includes(user.role as Roles);
}
