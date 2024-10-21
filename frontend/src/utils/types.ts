import { User } from "../contexts/userContext";
import { UsersRolesType } from "../__generated__/schema.graphql.types";

export enum Roles {
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

export const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: UsersRolesType.UnauthenticatedUser,
  userId: "unauthenticated",
  editions: [],
};
