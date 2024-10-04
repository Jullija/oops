import { ProgressBarProps } from "../bars/ProgressBar";
import { StudentCard } from "./cards/StudentCard";
import { CategoriesCard } from "./cards/CategoriesCard";
import { Styles } from "../../utils/Styles";
import { StudentCardData } from "../../hooks/StudentProfile/useStudentProfileData/useStudentData";
import { AnimalCard } from "./cards/AnimalCard/AnimalCard";
import { BonusesCard } from "./cards/BonusesCard";
import { Bonus, Level } from "../../hooks/StudentProfile";

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
  categoriesBarProps: ProgressBarProps[];
  prevLevel: Level | undefined;
  currLevel: Level;
  nextLevel: Level | undefined;
  bonuses: Bonus[];
};

export const SideBar = ({
  student,
  categoriesBarProps,
  prevLevel,
  currLevel,
  nextLevel,
  bonuses,
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
      <BonusesCard bonuses={bonuses} />
    </div>
  );
};
