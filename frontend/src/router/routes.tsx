import { createBrowserRouter } from "react-router-dom";
import { StudentProfile, HallOfFame, Welcome, Groups, Group } from "../screens";
import { MockData, Root } from "../components";
import { pathsWithParameters } from "./paths";

export const routes = createBrowserRouter([
  {
    path: pathsWithParameters.Default,
    element: <Root />,
    children: [
      {
        path: pathsWithParameters.Default,
        element: <Welcome />,
        index: true,
      },
      {
        path: pathsWithParameters.Welcome,
        element: <Welcome />,
      },
      {
        path: pathsWithParameters.MockData,
        element: <MockData />,
      },
      {
        path: pathsWithParameters.StudentProfile,
        element: <StudentProfile />,
      },
      {
        path: pathsWithParameters.HallOfFame,
        element: <HallOfFame studentId={"6"} />,
      },
      {
        path: pathsWithParameters.Groups,
        element: <Groups />,
      },
      {
        path: pathsWithParameters.Group,
        element: <Group />,
      },
    ],
  },
]);
