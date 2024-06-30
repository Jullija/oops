import { createBrowserRouter } from "react-router-dom";
import { HallOfFame, Welcome, Groups, Group } from "../screens";
import { Root } from "../components";
import { pathsWithParameters } from "./paths";
import { StudentProfile } from "../screens/StudentProfile";
import { TeacherStudentProfile } from "../screens/StudentProfile";

export const routes = createBrowserRouter([
  {
    path: pathsWithParameters.common.Default,
    element: <Root />,
    children: [
      {
        path: pathsWithParameters.common.Default,
        element: <Welcome />,
        index: true,
      },
      {
        path: pathsWithParameters.common.Welcome,
        element: <Welcome />,
      },
      {
        path: pathsWithParameters.student.StudentProfile,
        element: <StudentProfile />,
      },
      // TODO change prop to params
      // TODO probably distinct teacher and user hall of fame
      {
        path: pathsWithParameters.common.HallOfFame,
        element: <HallOfFame studentId={"6"} />,
      },
      {
        path: pathsWithParameters.teacher.Groups,
        element: <Groups />,
      },
      {
        path: pathsWithParameters.teacher.Group,
        element: <Group />,
      },
      {
        path: pathsWithParameters.teacher.StudentProfile,
        element: <TeacherStudentProfile />,
      },
    ],
  },
]);
