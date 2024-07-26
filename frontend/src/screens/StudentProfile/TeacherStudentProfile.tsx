import { UserCard } from "../../components/StudentProfile/userCard";
import { Styles } from "../../utils/Styles";
import StudentPoints from "../../components/StudentProfile/StudentPoints";
import { useParams } from "react-router-dom";
import { useTeacherStudentData } from "../../hooks/TeacherStudentProfile/useTeacherStudentData";
import { PointsForm } from "../../components/form/PointsForm/PointsForm";
import { FormPoints } from "../../components/form/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import { useEffect } from "react";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
};

export function TeacherStudentProfile() {
  const params = useParams();
  const studentId = params.id;
  const {
    user,
    studentData: data,
    loading,
    error,
  } = useTeacherStudentData({
    studentId: studentId ?? "-1",
  });
  const [createPoints, { data: mData, error: mError, loading: mLoading }] =
    useCreatePointsMutation();

  useEffect(() => {
    console.log("data: ", mData);
  }, [mData]);

  if (loading || mLoading) return <p>Loading...</p>;
  if (error || mError || !studentId)
    return (
      <p>
        Error: {error?.message} {mError?.message}
      </p>
    );
  if (!data) return <p>Please select an edition.</p>;

  // TODO add backend here
  const handleAdd = (formPoints: FormPoints) => {
    console.log("teacheId: ", user.userId);
    createPoints({
      variables: {
        studentId: parseInt(studentId),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    });
  };

  return (
    <div style={styles.container}>
      <UserCard
        fullName={data.fullName}
        index={data.index}
        points={data.points}
      />
      <StudentPoints pointsList={data.points} />
      <PointsForm handleAddPoints={handleAdd} />
    </div>
  );
}
