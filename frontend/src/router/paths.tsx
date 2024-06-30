import { Roles } from "../utils";

export const paths = {
  Default: "/",
  Welcome: "/welcome",
  StudentProfile: "/student-profile",
  HallOfFame: "/hall-of-fame",
};

export type NavigationItem = {
  title: string;
  path: string;
  allowedRoles: Roles[];
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Witaj",
    path: paths.Welcome,
    allowedRoles: [
      Roles.ADMIN,
      Roles.COORDINATOR,
      Roles.STUDENT,
      Roles.TEACHER,
      Roles.UNAUTHENTICATED_USER,
    ],
  },
  {
    title: "Profil studenta",
    path: paths.StudentProfile,
    allowedRoles: [Roles.STUDENT],
  },
  {
    title: "Hala Chwały",
    path: paths.HallOfFame,
    allowedRoles: [Roles.ADMIN, Roles.COORDINATOR, Roles.TEACHER],
  },
];
