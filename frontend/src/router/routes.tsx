import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components";
import { Welcome, HallOfFame } from "../screens";
import { StudentProfile } from "../screens/StudentProfile";
import { Forbidden } from "../screens/forbidden";
import { ProtectedRoute } from "./protectedRoute";
import { paths, navigationItems, NavigationItem } from "./paths";

const generateRoutes = (navigationItems: NavigationItem[]) => {
  return navigationItems.map((item) => ({
    path: item.path,
    element: (
      <ProtectedRoute
        element={
          item.path === paths.HallOfFame ? (
            <HallOfFame studentId={"6"} />
          ) : item.path === paths.StudentProfile ? (
            <StudentProfile />
          ) : (
            <Welcome />
          )
        }
        allowedRoles={item.allowedRoles}
      />
    ),
  }));
};

export const routes = createBrowserRouter([
  {
    path: paths.Default,
    element: <Root />,
    children: [
      {
        path: paths.Default,
        element: <Welcome />,
        index: true,
      },
      ...generateRoutes(navigationItems),
      {
        path: "/403",
        element: <Forbidden />,
      },
    ],
  },
]);
