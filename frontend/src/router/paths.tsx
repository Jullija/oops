export enum Roles {
  ADMIN = "admin",
  COORDINATOR = "coordinator",
  STUDENT = "student",
  TEACHER = "teacher",
  UNAUTHENTICATED_USER = "unauthenticated_user",
}

const commonPaths = {
  Default: {
    path: "/",
    allowedRoles: [
      Roles.UNAUTHENTICATED_USER,
      Roles.STUDENT,
      Roles.TEACHER,
      Roles.ADMIN,
      Roles.COORDINATOR,
    ],
  },
  Welcome: {
    path: "/welcome",
    allowedRoles: [
      Roles.UNAUTHENTICATED_USER,
      Roles.STUDENT,
      Roles.TEACHER,
      Roles.ADMIN,
      Roles.COORDINATOR,
    ],
  },
  HallOfFame: {
    path: "/hall-of-fame",
    allowedRoles: [
      Roles.UNAUTHENTICATED_USER,
      Roles.STUDENT,
      Roles.TEACHER,
      Roles.ADMIN,
      Roles.COORDINATOR,
    ],
  },
};

const studentPaths = {
  StudentProfile: {
    path: "/student-profile",
    allowedRoles: [Roles.STUDENT],
  },
};

const teacherPaths = {
  StudentProfile: {
    path: "/teacher/student-profile/:id",
    allowedRoles: [Roles.TEACHER, Roles.ADMIN, Roles.COORDINATOR],
  },
  Groups: {
    path: "/groups",
    allowedRoles: [Roles.TEACHER, Roles.ADMIN, Roles.COORDINATOR],
  },
  Group: {
    path: "/group/:id",
    allowedRoles: [Roles.TEACHER, Roles.ADMIN, Roles.COORDINATOR],
  },
  Students: {
    path: "/students",
    allowedRoles: [Roles.TEACHER, Roles.ADMIN, Roles.COORDINATOR],
  },
};

export const pathsWithParameters = {
  common: commonPaths,
  student: studentPaths,
  teacher: teacherPaths,
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
};

type NavigationItem = {
  title: string;
  path: string;
  allowedRoles: Roles[];
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
];
