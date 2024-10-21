import { UsersRolesType } from "../__generated__/schema.graphql.types";

const commonPaths = {
  Default: {
    path: "/",
    allowedRoles: [
      UsersRolesType.UnauthenticatedUser,
      UsersRolesType.Student,
      UsersRolesType.Teacher,
      UsersRolesType.Coordinator,
    ],
  },
  Welcome: {
    path: "/welcome",
    allowedRoles: [
      UsersRolesType.UnauthenticatedUser,
      UsersRolesType.Student,
      UsersRolesType.Teacher,
      UsersRolesType.Coordinator,
    ],
  },
  HallOfFame: {
    path: "/hall-of-fame",
    allowedRoles: [
      UsersRolesType.Student,
      UsersRolesType.Teacher,
      UsersRolesType.Coordinator,
    ],
  },
};

const studentPaths = {
  StudentProfile: {
    path: "/student-profile",
    allowedRoles: [UsersRolesType.Student],
  },
};

const teacherPaths = {
  StudentProfile: {
    path: "/teacher/student-profile/:id",
    allowedRoles: [UsersRolesType.Teacher, UsersRolesType.Coordinator],
  },
  Groups: {
    path: "/groups",
    allowedRoles: [UsersRolesType.Teacher, UsersRolesType.Coordinator],
  },
  Group: {
    path: "/group/:id",
    allowedRoles: [UsersRolesType.Teacher, UsersRolesType.Coordinator],
  },
  Students: {
    path: "/students",
    allowedRoles: [UsersRolesType.Teacher, UsersRolesType.Coordinator],
  },
};

const coordinatorPaths = {
  Editions: {
    path: "/coordinator/editions",
    allowedRoles: [UsersRolesType.Coordinator],
  },
  Edition: {
    path: "/coordinator/edition/:id",
    allowedRoles: [UsersRolesType.Coordinator],
  },
};

export const pathsWithParameters = {
  common: commonPaths,
  student: studentPaths,
  teacher: teacherPaths,
  coordinator: coordinatorPaths,
};

export const pathsGenerator = {
  common: Object.fromEntries(
    Object.entries(commonPaths).map(([key, value]) => [key, value.path]),
  ),
  student: Object.fromEntries(
    Object.entries(studentPaths).map(([key, value]) => [key, value.path]),
  ),
  teacher: {
    Groups: teacherPaths.Groups.path,
    Group: (id: string) => `${teacherPaths.Group.path.replace(":id", id)}`,
    StudentProfile: (id: string) =>
      `${teacherPaths.StudentProfile.path.replace(":id", id)}`,
    Students: teacherPaths.Students.path,
  },
  coordinator: {
    Editions: coordinatorPaths.Editions.path,
    Edition: (id: string) =>
      `${coordinatorPaths.Edition.path.replace(":id", id)}`,
  },
};

type NavigationItem = {
  title: string;
  path: string;
  allowedRoles: UsersRolesType[];
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Witaj",
    path: pathsWithParameters.common.Welcome.path,
    allowedRoles: pathsWithParameters.common.Welcome.allowedRoles,
  },
  {
    title: "Profil studenta",
    path: pathsWithParameters.student.StudentProfile.path,
    allowedRoles: pathsWithParameters.student.StudentProfile.allowedRoles,
  },
  {
    title: "Hala Chwały",
    path: pathsWithParameters.common.HallOfFame.path,
    allowedRoles: pathsWithParameters.common.HallOfFame.allowedRoles,
  },
  {
    title: "Grupy",
    path: pathsWithParameters.teacher.Groups.path,
    allowedRoles: pathsWithParameters.teacher.Groups.allowedRoles,
  },
  {
    title: "Studenci",
    path: pathsWithParameters.teacher.Students.path,
    allowedRoles: pathsWithParameters.teacher.Students.allowedRoles,
  },
  {
    title: "Edycje",
    path: pathsWithParameters.coordinator.Editions.path,
    allowedRoles: pathsWithParameters.coordinator.Editions.allowedRoles,
  },
];
