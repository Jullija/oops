import { PointsBarProps } from "../PointsBar";
import { UserCard } from "./cards/userCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentData } from "../../screens/StudentProfile/hooks/useStudentData";

const styles: Styles = {
  sideBar: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
};

type SideBarProps = {
  student: StudentData;
  categories: PointsBarProps[];
};

export const SideBar = ({ student, categories }: SideBarProps) => {
  return (
    <div style={styles.sideBar}>
      <UserCard {...student} />
      <CategoriesCard entries={categories} />
    </div>
  );
};
