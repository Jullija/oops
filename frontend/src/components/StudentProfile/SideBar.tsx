import { PointsBarProps } from "../PointsBar";
import { StudentCard } from "./cards/StudentCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentCardData } from "../../hooks/StudentProfile/useStudentData";
import { AnimalCard } from "./cards/AnimalCard/AnimalCard";
import { LevelType } from "../../__generated__/schema.graphql.types";

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
  prevLevel?: LevelType;
  currLevel: LevelType;
  nextLevel?: LevelType;
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
