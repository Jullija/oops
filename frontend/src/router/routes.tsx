import { createBrowserRouter } from "react-router-dom";
import HallOfFame from "../screens/HallOfFame/HallOfFame";
import { Root } from "../components/Root";
import { pathsWithParameters } from "./paths";
import { StudentProfile } from "../screens/StudentProfile/StudentProfile";
import { TeacherStudentProfile } from "../screens/StudentProfile/TeacherStudentProfile";
import { Groups } from "../screens/Groups/Groups";
import { Group } from "../screens/Group/Group";
import { Welcome } from "../screens/Welcome/Welcome";
import { ProtectedRoute } from "./protectedRoute";
import { StudentsScreen } from "../screens/Students/StudentsScreen";
import { EditionsScreen } from "../screens/Editions/EditionsScreen";
import { EditionScreen } from "../screens/Edition/EditionScreen";

const commonPaths = pathsWithParameters.common;
const studentPaths = pathsWithParameters.student;
const teacherPaths = pathsWithParameters.teacher;
const coordinatorPaths = pathsWithParameters.coordinator;

export const routes = createBrowserRouter([
  {
    path: commonPaths.Default.path,
    element: <Root />,
    children: [
      {
        path: commonPaths.Default.path,
        element: <Welcome />,
        index: true,
      },
      {
        path: commonPaths.Welcome.path,
        element: (
          <ProtectedRoute
            element={<Welcome />}
            allowedRoles={commonPaths.Welcome.allowedRoles}
          />
        ),
      },
      {
        path: studentPaths.StudentProfile.path,
        element: (
          <ProtectedRoute
            element={<StudentProfile />}
            allowedRoles={studentPaths.StudentProfile.allowedRoles}
          />
        ),
      },
      {
        path: commonPaths.HallOfFame.path,
        element: (
          <ProtectedRoute
            element={<HallOfFame />}
            allowedRoles={commonPaths.HallOfFame.allowedRoles}
          />
        ),
      },
      {
        path: teacherPaths.Groups.path,
        element: (
          <ProtectedRoute
            element={<Groups />}
            allowedRoles={teacherPaths.Groups.allowedRoles}
          />
        ),
      },
      {
        path: teacherPaths.Group.path,
        element: (
          <ProtectedRoute
            element={<Group />}
            allowedRoles={teacherPaths.Group.allowedRoles}
          />
        ),
      },
      {
        path: teacherPaths.StudentProfile.path,
        element: (
          <ProtectedRoute
            element={<TeacherStudentProfile />}
            allowedRoles={teacherPaths.StudentProfile.allowedRoles}
          />
        ),
      },
      {
        path: teacherPaths.Students.path,
        element: (
          <ProtectedRoute
            element={<StudentsScreen />}
            allowedRoles={teacherPaths.Students.allowedRoles}
          />
        ),
      },
      {
        path: coordinatorPaths.Editions.path,
        element: (
          <ProtectedRoute
            element={<EditionsScreen />}
            allowedRoles={coordinatorPaths.Editions.allowedRoles}
          />
        ),
      },
      {
        path: coordinatorPaths.Edition.path,
        element: (
          <ProtectedRoute
            element={<EditionScreen />}
            allowedRoles={coordinatorPaths.Edition.allowedRoles}
          />
        ),
      },
    ],
  },
]);
