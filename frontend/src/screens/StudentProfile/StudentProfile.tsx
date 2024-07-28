import { Styles } from "../../utils/Styles";
import PointsTableWithFilter from "../../components/StudentProfile/table/PointsTableWithFilter";
import { useStudentData } from "../../hooks/StudentProfile/useStudentData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useUser } from "../../hooks/common/useUser";
import { useCategoriesPointsQuery } from "../../graphql/categoriesPoints.graphql.types";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { PointsBarProps } from "../../components/PointsBar";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 20,
    margin: 12,
  },
};

export function StudentProfile() {
  const { user } = useUser();
  const { selectedEdition } = useEditionSelection();
  const { student, loading, error } = useStudentData(user.userId ?? "-1");

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesPointsQuery({
    variables: {
      editionId: parseInt(selectedEdition?.editionId ?? "-1"),
      studentId: parseInt(user.userId ?? "-1"),
    },
  });

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

  // TODO: add components for loading state and error message
  if (loading || categoriesLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (categoriesError) return <p>Error: {categoriesError.message}</p>;
  if (!student) return <p>Please select an edition.</p>;

  return (
    <div style={styles.container}>
      <SideBar student={student} categories={categories} />
      <PointsTableWithFilter pointsList={student.points} />
    </div>
  );
}
