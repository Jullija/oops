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
};

export const HallOfFameMenu = ({
  onShowStudentsFromAllGroupsChange,
  showStudentsFromAllGroups,
  onSearchChange: onInputChange,
  scrollToStudent,
}: HallOfFameMenuProps) => {
  return (
    <div style={styles.container}>
      <button onClick={scrollToStudent}>znajdź swoją pozycję</button>
      <HallOfFameStudentSearcher onInputChange={onInputChange} />
      <>
        <FilterButton
          option={"moje grupy"}
          isActive={!showStudentsFromAllGroups}
          onClick={() => onShowStudentsFromAllGroupsChange(false)}
        />
        <FilterButton
          option={"wszystkie grupy"}
          isActive={showStudentsFromAllGroups}
          onClick={() => onShowStudentsFromAllGroupsChange(true)}
        />
      </>
    </div>
  );
};
