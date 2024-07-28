import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { PointsForm } from "../../components/form/PointsForm/PointsForm";
import { FormPoints } from "../../components/form/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";
import { useStudentData } from "../../hooks/StudentProfile/useStudentData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useUser } from "../../hooks/common/useUser";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { useCategoriesPointsQuery } from "../../graphql/categoriesPoints.graphql.types";
import { PointsBarProps } from "../../components/PointsBar";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
};

export function TeacherStudentProfile() {
  const { user } = useUser();
  const { selectedEdition } = useEditionSelection();

  const params = useParams();
  const studentId = params.id;
  const {
    student,
    loading: studentLoading,
    error: studentError,
    refetch,
  } = useStudentData(studentId ?? "-1");

  const [
    createPoints,
    { error: createPointsError, loading: createPointsLoading },
  ] = useCreatePointsMutation();

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
    refetch: categoriesRefetch,
  } = useCategoriesPointsQuery({
    variables: {
      editionId: parseInt(selectedEdition?.editionId ?? "-1"),
      studentId: parseInt(studentId ?? "-1"),
    },
  });

  // TODO: add components for loading state and error message
  if (studentLoading || createPointsLoading || categoriesLoading)
    return <p>Loading...</p>;
  if (studentError) return <p>Error: {studentError.message}</p>;
  if (categoriesError) return <p>Error: {categoriesError.message}</p>;
  if (!student) return <p>Please select an edition.</p>;

  const handleAdd = (formPoints: FormPoints) => {
    createPoints({
      variables: {
        studentId: parseInt(studentId ?? "-1"),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    }).finally(() => {
      refetch?.();
      categoriesRefetch?.();
    });
  };

  const categories: PointsBarProps[] =
    categoriesData?.getSumOfPointsForStudentByCategory?.map((cat) => {
      return {
        label: cat?.category?.categoryName ?? "-",
        bounds: {
          upper: cat?.maxPoints ?? 1,
        },
        points: cat?.sumOfAll ?? 0,
      };
    }) ?? [];

  return (
    <div style={styles.container}>
      <SideBar student={student} categories={categories} />
      <PointsTableWithFilter pointsList={student.points} />
      <PointsForm handleAddPoints={handleAdd} />
      {!!createPointsError && (
        <div style={{ color: "red" }}>
          MUTATION ERROR: {createPointsError?.message}
        </div>
      )}
    </div>
  );
}
