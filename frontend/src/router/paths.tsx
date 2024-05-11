export const paths = {
  Default: "/",
  Welcome: "/welcome",
  MockData: "/mock-data",
  StudentProfile: "/student-profile",
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
    title: "mock-data",
    path: paths.MockData,
  },
  {
    title: "student-profile",
    path: paths.StudentProfile,
  },
];
