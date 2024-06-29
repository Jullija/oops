import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components";
import { paths } from "./paths";
import { StudentProfile } from "../screens/StudentProfile";
import HallOfFame from "../screens/HallOfFame";
import { Welcome } from "../screens/Welcome";

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
      {
        path: paths.Welcome,
        element: <Welcome />,
      },
      {
        path: paths.StudentProfile,
        element: <StudentProfile />,
      },
      {
        path: paths.HallOfFame,
        element: <HallOfFame />,
      },
    ],
  },
]);
