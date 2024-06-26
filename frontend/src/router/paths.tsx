export const paths = {
  Default: "/",
  Welcome: "/welcome",
  StudentProfile: "/student-profile",
  HallOfFame: "/hall-of-fame",
};

type NavigationItem = {
  title: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  {
    title: "welcome",
    path: paths.Welcome,
  },
  {
    title: "student-profile",
    path: paths.StudentProfile,
  },
  {
    title: "hall-of-fame",
    path: paths.HallOfFame,
  },
];
