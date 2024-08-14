import { PointsBarProps } from "../PointsBar";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentData } from "../../hooks/StudentProfile/useStudentData";
import { StudentCard } from "./cards/StudentCard";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
};

type SideBarProps = {
  student: StudentData;
  categoriesBarProps: PointsBarProps[];
};

export const SideBar = ({ student, categoriesBarProps }: SideBarProps) => {
  return (
    <div style={styles.container}>
      <StudentCard {...student} />
      <CategoriesCard categoriesBarProps={categoriesBarProps} />
    </div>
  );
};
