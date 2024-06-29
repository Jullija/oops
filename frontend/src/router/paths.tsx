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
    title: "Witaj",
    path: paths.Welcome,
  },
  {
    title: "Profil studenta",
    path: paths.StudentProfile,
  },
  {
    title: "Hala Chwały",
    path: paths.HallOfFame,
  },
];
