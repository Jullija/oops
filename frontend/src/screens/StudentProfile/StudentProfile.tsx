import { UserCard } from "../../components/StudentProfile/userCard";
import { Styles } from "../../utils/Styles";
import StudentPoints from "../../components/StudentProfile/StudentPoints";
import { useStudentData } from "../../hooks/StudentProfile/useStudentData";
import { PointsForm } from "../../components/form/PointsForm/PointsForm";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
};

export function StudentProfile() {
  const { userData, loading, error } = useStudentData();

  // TODO: add components for loading state and error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!userData) return <p>Please select an edition.</p>;

  return (
    <div style={styles.container}>
      {!loading && (
        <>
          <UserCard
            fullName={userData?.fullName}
            index={userData.index}
            points={userData.points}
          />
          <StudentPoints pointsList={userData.points} />
          <PointsForm handleAddPoints={() => {}} />
        </>
      )}
    </div>
  );
}
