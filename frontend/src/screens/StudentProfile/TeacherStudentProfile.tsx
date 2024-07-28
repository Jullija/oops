import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { PointsForm } from "../../components/form/PointsForm/PointsForm";
import { FormPoints } from "../../components/form/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
};

export function TeacherStudentProfile() {
  const { user } = useUser();

  const params = useParams();
  const studentId = params.id;

  const { categories, student, loading, error, refetch } =
    useStudentProfileData(studentId ?? "-1");

  const [createPoints, { error: createPointsError }] =
    useCreatePointsMutation();

  // TODO: add components for loading state and error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!student) return <p>student is undefined</p>;

  const handleAdd = (formPoints: FormPoints) => {
    createPoints({
      variables: {
        studentId: parseInt(studentId ?? "-1"),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    }).finally(() => {
      refetch();
    });
  };

  return (
    <div style={styles.container}>
      <SideBar student={student} categoriesBarProps={categories} />
      <div style={styles.rightContainer}>
        <PointsTableWithFilter pointsList={student.points} />
        <PointsForm
          handleAddPoints={handleAdd}
          createError={createPointsError?.message}
        />
      </div>
    </div>
  );
}
