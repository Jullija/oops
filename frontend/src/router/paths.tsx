const commonPaths = {
  Default: "/",
  Welcome: "/welcome",
  HallOfFame: "/hall-of-fame",
};

const studentPaths = {
  StudentProfile: "/student-profile",
};

const teacherPaths = {
  StudentProfile: "/teacher/student-profile",
  Groups: "/groups",
  Group: "/group",
};

// do not use outside ./router
export const pathsWithParameters = {
  common: { ...commonPaths },
  student: { ...studentPaths },
  teacher: {
    ...teacherPaths,
    StudentProfile: `${teacherPaths.StudentProfile}/:id`,
    Group: `${teacherPaths.Group}/:id`,
  },
};

export const pathsGenerator = {
  common: { ...commonPaths },
  student: { ...studentPaths },
  teacher: {
    ...teacherPaths,
    StudentProfile: (id: string) => `${teacherPaths.StudentProfile}/${id}`,
    Group: (id: string) => `${teacherPaths.Group}/${id}`,
  },
};

type NavigationItem = {
  title: string;
  path: string;
};

// TODO return navbar items based on user role
export const navigationItems: NavigationItem[] = [
  {
    title: "Witaj",
    path: pathsWithParameters.common.Welcome,
  },
  {
    title: "Profil studenta",
    path: pathsWithParameters.student.StudentProfile,
  },
  {
    title: "Hala Chwały",
    path: pathsWithParameters.common.HallOfFame,
  },
  {
    title: "Grupy",
    path: pathsWithParameters.teacher.Groups,
  },
  {
    title: "Grupa",
    path: pathsWithParameters.teacher.Group,
  },
];
