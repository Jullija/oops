export const paths = {
  Default: "/",
  Welcome: "/welcome",
  MockData: "/mock-data",
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
    title: "mock-data",
    path: paths.MockData,
  },
  {
    title: "hall-of-fame",
    path: paths.HallOfFame,
  },
];
