import { Styles } from "../../utils/Styles";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData/useStudentProfileData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { StudentTableWithFilters } from "../../components/StudentProfile/table/StudentTableWithFilters";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 20,
    margin: 12,
  },
};

export function StudentProfile() {
  const { user } = useUser();
  const {
    categories,
    studentData,
    points,
    prevLevel,
    currLevel,
    nextLevel,
    bonuses,
    filterHeaderNames,
    loading,
    error,
  } = useStudentProfileData(user.userId);

  // TODO: add components for loading state and error message

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!studentData) return <p>Student is undefined</p>;
  if (!currLevel) return <p>Curr level is undefined</p>;

  return (
    <div style={styles.container}>
      <SideBar
        student={studentData}
        categoriesBarProps={categories}
        prevLevel={prevLevel}
        currLevel={currLevel}
        nextLevel={nextLevel}
        bonuses={bonuses}
      />
      <StudentTableWithFilters
        points={points}
        filterHeaderNames={filterHeaderNames}
      />
    </div>
  );
}
