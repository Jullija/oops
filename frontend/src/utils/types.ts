import { User } from "../contexts/userContext";

// do we have admin?
export enum Roles {
  ADMIN = "admin",
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

export const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: Roles.UNAUTHENTICATED_USER,
  userId: "unauthenticated",
};
