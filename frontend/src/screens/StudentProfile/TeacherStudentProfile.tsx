import { UserCard } from "../../components/StudentProfile/cards/userCard";
import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { useTeacherStudentData } from "../../hooks/TeacherStudentProfile/useTeacherStudentData";
import { PointsForm } from "../../components/form/PointsForm/PointsForm";
import { FormPoints } from "../../components/form/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";

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
    refetch,
  } = useTeacherStudentData({
    studentId: studentId ?? "-1",
  });
  const [createPoints, { error: mError, loading: mLoading }] =
    useCreatePointsMutation();

  if (loading || mLoading) return <p>Loading...</p>;
  if (error || !studentId) return <p>Error: {error?.message}</p>;
  if (!data) return <p>Please select an edition.</p>;

  const handleAdd = (formPoints: FormPoints) => {
    createPoints({
      variables: {
        studentId: parseInt(studentId),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    }).finally(() => refetch?.());
  };

  return (
    <div style={styles.container}>
      <UserCard
        fullName={data.fullName}
        index={data.index}
        points={data.points}
      />
      <PointsTableWithFilter pointsList={data.points} />
      <PointsForm handleAddPoints={handleAdd} />
      {!!mError && (
        <div style={{ color: "red" }}>MUTATION ERROR: {mError?.message}</div>
      )}
    </div>
  );
}
