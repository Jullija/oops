import { UserCard } from "../../components/StudentProfile/userCard";
import { Styles } from "../../utils";
import StudentPoints from "../../components/StudentProfile/StudentPoints";
import { useParams } from "react-router-dom";
import { useTeacherStudentData } from "../../hooks/TeacherStudentProfile/useTeacherStudentData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
};

// TODO add teachers functionalities

export function TeacherStudentProfile() {
  const params = useParams();
  const studentId = params.id;
  const { userData, loading, error } = useTeacherStudentData({
    studentId: studentId ?? "-1",
  });

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
        </>
      )}
    </div>
  );
}
