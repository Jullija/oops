export const paths = {
  Default: "/",
  Welcome: "/welcome",
  MockData: "/mock-data",
  StudentProfile: "/student-profile",
  HallOfFame: "/hall-of-fame",
  GraphqlDemo: "/graphql-demo",
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
  {
    title: "hall-of-fame",
    path: paths.HallOfFame,
  },
  {
    title: "graphql-demo",
    path: paths.GraphqlDemo,
  },
];
