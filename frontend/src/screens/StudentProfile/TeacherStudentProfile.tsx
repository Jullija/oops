import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { PointsForm } from "../../components/StudentProfile/PointsForm/PointsForm";
import { FormPoints } from "../../components/StudentProfile/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { StudentTableWithFilters } from "../../components/StudentProfile/table/StudentTableWithFilters";

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

  const {
    categories,
    studentData,
    points,
    prevLevel,
    currLevel,
    nextLevel,
    filterHeaderNames,
    loading,
    error,
    refetch,
  } = useStudentProfileData(studentId);

  const [createPoints, { error: createPointsError }] =
    useCreatePointsMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!studentData) return <p>Student is undefined</p>;
  if (!currLevel) return <p>Curr level is undefined</p>;

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
      <SideBar
        student={studentData}
        categoriesBarProps={categories}
        currLevel={currLevel}
        prevLevel={prevLevel}
        nextLevel={nextLevel}
      />
      <div style={styles.rightContainer}>
        <StudentTableWithFilters
          points={points}
          filterHeaderNames={filterHeaderNames}
        />
        <PointsForm
          handleAddPoints={handleAdd}
          createError={createPointsError?.message}
        />
      </div>
    </div>
  );
}
