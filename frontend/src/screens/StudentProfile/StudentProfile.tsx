import { Styles } from "../../utils/Styles";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 20,
    margin: 12,
  },
};

export function StudentProfile() {
  const { user } = useUser();
  const { categories, student, loading, error } = useStudentProfileData(
    user.userId,
  );

  // TODO: add components for loading state and error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!student) return <p>Student is undefined</p>;

  return (
    <div style={styles.container}>
      <SideBar student={student} categoriesBarProps={categories} />
      <PointsTableWithFilter pointsList={student.points} />
    </div>
  );
}
