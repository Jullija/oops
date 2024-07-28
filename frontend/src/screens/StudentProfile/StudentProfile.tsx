import { Styles } from "../../utils/Styles";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";
import { useStudentData } from "../../hooks/StudentProfile/useStudentData";
import { SideBar } from "../../components/StudentProfile/SideBar";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 20,
    margin: 12,
  },
};

export function StudentProfile() {
  const { student, loading, error } = useStudentData();

  // TODO: add components for loading state and error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!student) return <p>Please select an edition.</p>;

  return (
    <div style={styles.container}>
      <SideBar student={student} />
      <PointsTableWithFilter pointsList={student.points} />
    </div>
  );
}
