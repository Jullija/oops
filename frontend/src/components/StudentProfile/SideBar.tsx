import { PointsBarProps } from "../PointsBar";
import { StudentCard } from "./cards/StudentCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentCardData } from "../../hooks/StudentProfile/useStudentData";
import { AnimalCard } from "./cards/AnimalCard";
import { Level } from "../../hooks/StudentProfile/useAnimalData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRight: "2px solid red",
    paddingRight: 24,
    width: 360,
  },
};

type SideBarProps = {
  student: StudentCardData;
  categoriesBarProps: PointsBarProps[];
  prevLevel?: Level;
  currLevel: Level;
  nextLevel?: Level;
};

export const SideBar = ({
  student,
  categoriesBarProps,
  prevLevel,
  currLevel,
  nextLevel,
}: SideBarProps) => {
  return (
    <div style={styles.container}>
      <StudentCard {...student} />
      <AnimalCard
        prevLevel={prevLevel}
        currLevel={currLevel}
        nextLevel={nextLevel}
        totalPoints={student.totalPoints}
      />
      <CategoriesCard categoriesBarProps={categoriesBarProps} />
    </div>
  );
};
