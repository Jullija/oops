import { createBrowserRouter } from "react-router-dom";
import HallOfFame from "../screens/HallOfFame/HallOfFame";
import { Root } from "../components/Root";
import { pathsWithParameters } from "./paths";
import { StudentProfile } from "../screens/StudentProfile/StudentProfile";
import { TeacherStudentProfile } from "../screens/StudentProfile/TeacherStudentProfile";
import { Groups } from "../screens/Groups/Groups";
import { Group } from "../screens/Group/Group";
import { Welcome } from "../screens/Welcome/Welcome";

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
      // TODO probably distinct teacher and user hall of fame
      {
        path: pathsWithParameters.common.HallOfFame,
        element: <HallOfFame />,
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
