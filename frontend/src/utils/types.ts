import { User } from "../contexts/userContext";
import { UsersRolesType } from "../__generated__/schema.graphql.types";

export enum Roles {
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

export const RolesToUsersRolesTypeMap: { [key in Roles]: UsersRolesType } = {
  [Roles.COORDINATOR]: UsersRolesType.Coordinator,
  [Roles.STUDENT]: UsersRolesType.Student,
  [Roles.TEACHER]: UsersRolesType.Teacher,
  [Roles.UNAUTHENTICATED_USER]: UsersRolesType.UnauthenticatedUser,
};

export const UsersRolesTypeToRolesMap: { [key in UsersRolesType]: Roles } = {
  [UsersRolesType.Coordinator]: Roles.COORDINATOR,
  [UsersRolesType.Student]: Roles.STUDENT,
  [UsersRolesType.Teacher]: Roles.TEACHER,
  [UsersRolesType.UnauthenticatedUser]: Roles.UNAUTHENTICATED_USER,
};

export const stringToRolesTypeMap: { [key: string]: Roles } = {
  coordinator: Roles.COORDINATOR,
  student: Roles.STUDENT,
  teacher: Roles.TEACHER,
  unauthenticated_user: Roles.UNAUTHENTICATED_USER,
};

export const stringToUsersRolesTypeMap: { [key: string]: UsersRolesType } = {
  coordinator: UsersRolesType.Coordinator,
  student: UsersRolesType.Student,
  teacher: UsersRolesType.Teacher,
  unauthenticated_user: UsersRolesType.UnauthenticatedUser,
};

export const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: RolesToUsersRolesTypeMap[Roles.UNAUTHENTICATED_USER],
  userId: "unauthenticated",
  userGroups: [],
};
