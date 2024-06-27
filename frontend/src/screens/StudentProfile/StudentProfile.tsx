import { UserCard } from "../../components/userProfile/userCard";
import { Styles } from "../../utils";
import StudentPoints from "../../components/userProfile/StudentPoints";
import { useStudentData } from "../../hooks/useStudentData";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!userData) return <p>Please select an edition.</p>;

  return (
    <div style={styles.container}>
      {!loading && (
        <>
          <UserCard
            fullName={userData.fullName}
            index={userData.index}
            points={userData.points}
          />
          <StudentPoints pointsList={userData.points} />
        </>
      )}
    </div>
  );
}
