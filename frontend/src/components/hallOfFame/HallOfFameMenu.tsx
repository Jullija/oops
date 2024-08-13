import { Styles } from "../../utils/Styles";
import { HallOfFameStudentData } from "./StudentCard";
import { HallOfFameStudentSearcher } from "./HallOfFameSearcher";
import { FilterButton } from "../FilterButton";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 12,
    padding: 12,
    backgroundColor: "lightgrey",
  },
};

type HallOfFameMenuProps = {
  students: HallOfFameStudentData[];
  showStudentsFromAllGroups: boolean;
  onShowStudentsFromAllGroupsChange: (showAllStudents: boolean) => void;
  onSearchChange: (input: string) => void;
  scrollToStudent: () => void;
  studentScreen: boolean;
};

export const HallOfFameMenu = ({
  onShowStudentsFromAllGroupsChange,
  showStudentsFromAllGroups,
  onSearchChange,
  scrollToStudent,
  studentScreen,
}: HallOfFameMenuProps) => {
  return (
    <div style={styles.container}>
      {studentScreen && (
        <button onClick={scrollToStudent}>znajdź swoją pozycję</button>
      )}
      <HallOfFameStudentSearcher onInputChange={onSearchChange} />
      {studentScreen && (
        <>
          <FilterButton
            option={"moja grupa"}
            isActive={!showStudentsFromAllGroups}
            onClick={() => onShowStudentsFromAllGroupsChange(false)}
          />
          <FilterButton
            option={"wszystkie grupy"}
            isActive={showStudentsFromAllGroups}
            onClick={() => onShowStudentsFromAllGroupsChange(true)}
          />
        </>
      )}
    </div>
  );
};
