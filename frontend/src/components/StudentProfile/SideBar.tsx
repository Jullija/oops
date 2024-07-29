import { PointsBarProps } from "../PointsBar";
import { UserCard } from "./cards/userCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentData } from "../../hooks/StudentProfile/useStudentData";

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
      <UserCard {...student} />
      <CategoriesCard categoriesBarProps={categoriesBarProps} />
    </div>
  );
};
