const basePaths = {
  Default: "/",
  Welcome: "/welcome",
  MockData: "/mock-data",
  StudentProfile: "/student-profile",
  HallOfFame: "/hall-of-fame",
  GroupsList: "/groups-list",
  Group: "/group",
};

// do not use outside ./router
export const pathsWithParameters = {
  ...basePaths,
  Group: `${basePaths.Group}/:id`,
};

export const pathsGenerator = {
  ...basePaths,
  Group: (id: string) => `${basePaths.Group}/${id}`,
};

type NavigationItem = {
  title: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  {
    title: "welcome",
    path: pathsWithParameters.Welcome,
  },
  {
    title: "mock-data",
    path: pathsWithParameters.MockData,
  },
  {
    title: "student-profile",
    path: pathsWithParameters.StudentProfile,
  },
  {
    title: "hall-of-fame",
    path: pathsWithParameters.HallOfFame,
  },
  {
    title: "groups-list",
    path: pathsWithParameters.GroupsList,
  },
];
