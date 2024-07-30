import { useCallback, useEffect, useRef, useState } from "react";
import { Styles } from "../../utils/Styles";
import { HallOfFameStudentData, StudentCard } from "./StudentCard";
import { HallOfFameStudentSearcher } from "./HallOfFameSearcher";
import { FilterButtonGroup } from "../FilterButtonsGroup/FilterButtonGroup";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightblue",
  },
  cardsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 12,
    width: 600,
    overflowY: "scroll",
    padding: 12,
  },
  sideBarMenu: {
    display: "flex",
    gap: 12,
    padding: 12,
    backgroundColor: "lightgrey",
  },
};

type SideBarProps = {
  students: HallOfFameStudentData[];
  highlightedStudent?: HallOfFameStudentData;
  onShowChange: (showAllStudents: boolean) => void;
  showAllStudents: boolean;
};

export const SideBar = ({
  students,
  highlightedStudent,
  onShowChange,
  showAllStudents,
}: SideBarProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [filteredStudents, setFilteredStudents] = useState<
    HallOfFameStudentData[] | undefined
  >();

  const scrollToStudent = useCallback(() => {
    const studentElement = document.getElementById(
      `student-${highlightedStudent?.id}`,
    );
    if (studentElement) {
      studentElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlightedStudent?.id]);

  useEffect(() => {
    if (highlightedStudent?.id) {
      scrollToStudent();
    }
  }, [scrollToStudent, highlightedStudent?.id, showAllStudents]);

  const onInputChange = (students: HallOfFameStudentData[]) => {
    setFilteredStudents(students);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBarMenu}>
        <button ref={buttonRef} onClick={scrollToStudent}>
          scroll to me
        </button>
        <HallOfFameStudentSearcher
          onInputChange={onInputChange}
          students={students}
        />
        {/* TODO Im not sure if there is a need to create component */}
        <FilterButtonGroup
          options={["moje", "wszystkie"]}
          selectedOption={showAllStudents ? "wszystkie" : "moje"}
          onSelectionChange={(option: string) => {
            onShowChange(option === "wszystkie");
          }}
        />
      </div>
      <div style={styles.cardsContainer}>
        {(filteredStudents ?? students).map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isHighlighted={student.id === highlightedStudent?.id}
          />
        ))}
      </div>
    </div>
  );
};
