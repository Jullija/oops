import { User } from "../contexts/userContext";

export enum Roles {
  ADMIN = "admin",
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

export const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: "unauthenticated_user",
  userId: "unauthenticated",
};
