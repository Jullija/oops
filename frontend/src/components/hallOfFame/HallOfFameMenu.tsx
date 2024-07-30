import { Styles } from "../../utils/Styles";
import { HallOfFameStudentData } from "./StudentCard";
import { HallOfFameStudentSearcher } from "./HallOfFameSearcher";
import { FilterButtonGroup } from "../FilterButtonsGroup/FilterButtonGroup";

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
      <button onClick={scrollToStudent}>scroll to me</button>
      <HallOfFameStudentSearcher onInputChange={onInputChange} />
      {/* TODO Im not sure if there is a need to create component */}
      <FilterButtonGroup
        options={["moje", "wszystkie"]}
        selectedOption={showStudentsFromAllGroups ? "wszystkie" : "moje"}
        onSelectionChange={(option: string) => {
          onShowStudentsFromAllGroupsChange(option === "wszystkie");
        }}
      />
    </div>
  );
};
