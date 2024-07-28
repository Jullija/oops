import { PointsBarProps } from "../PointsBar";
import { UserCard } from "./cards/userCard";
import { useCategoriesPointsQuery } from "../../graphql/categoriesPoints.graphql.types";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { CategoriesCard } from "./cards/CategoriesCard";
import type { StudentData } from "../../hooks/StudentProfile/useStudentData";
import { Styles } from "../../utils/Styles";

const styles: Styles = {
  sideBar: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
};

type SideBarProps = {
  student: StudentData;
};

export const SideBar = ({ student }: SideBarProps) => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useCategoriesPointsQuery({
    variables: {
      editionId: parseInt(selectedEdition?.editionId ?? "-1"),
      studentId: parseInt(student.id),
    },
  });

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>ERROR: {error.message}</div>;
  }

  // TODO why so many undefines
  const categories: PointsBarProps[] =
    data?.getSumOfPointsForStudentByCategory?.map((cat) => {
      return {
        label: cat?.category?.categoryName ?? "-",
        bounds: {
          upper: cat?.maxPoints ?? 1,
        },
        points: cat?.sumOfPurePoints ?? 0,
      };
    }) ?? [];

  return (
    <div style={styles.sideBar}>
      <UserCard {...student} />
      <CategoriesCard entries={categories} />
    </div>
  );
};
