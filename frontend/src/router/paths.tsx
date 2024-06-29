const basePaths = {
  Default: "/",
  Welcome: "/welcome",
  StudentProfile: "/student-profile",
  HallOfFame: "/hall-of-fame",
  Groups: "/groups",
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
    title: "Witaj",
    path: pathsWithParameters.Welcome,
  },
  {
    title: "Profil studenta",
    path: pathsWithParameters.StudentProfile,
  },
  {
    title: "Hala Chwały",
    path: pathsWithParameters.HallOfFame,
  },
  {
    title: "Grupy",
    path: pathsWithParameters.Groups,
  },
  {
    title: "Grupa",
    path: pathsWithParameters.Group,
  },
];
