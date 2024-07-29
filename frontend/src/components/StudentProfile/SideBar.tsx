import { PointsBarProps } from "../PointsBar";
import { StudentCard } from "./cards/StudentCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentCardData } from "../../hooks/StudentProfile/useStudentData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRight: "2px solid red",
    paddingRight: 24,
  },
};

type SideBarProps = {
  student: StudentCardData;
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
