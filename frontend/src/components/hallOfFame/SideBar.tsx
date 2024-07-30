import { useCallback, useEffect, useRef, useState } from "react";
import { Styles } from "../../utils/Styles";
import { HallOfFameStudentData, StudentCard } from "./StudentCard";
import { HallOfFameStudentSearcher } from "./HallOfFameSearcher";

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
  chooseButton: {
    padding: 4,
    backgroundColor: "white",
  },
  active: {
    backgroundColor: "pink",
  },
};

type SideBarProps = {
  students: HallOfFameStudentData[];
  highlightedStudentId?: string;
};

export const SideBar = ({ students, highlightedStudentId }: SideBarProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [filteredStudents, setFilteredStudents] = useState<
    HallOfFameStudentData[] | undefined
  >();
  const [showAllStudents, setShowAllStudents] = useState(false);

  const scrollToStudent = useCallback(() => {
    const studentElement = document.getElementById(
      `student-${highlightedStudentId}`,
    );
    if (studentElement) {
      studentElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlightedStudentId]);

  useEffect(() => {
    if (highlightedStudentId) {
      scrollToStudent();
    }
  }, [scrollToStudent, highlightedStudentId]);

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
        <div
          style={{
            ...styles.chooseButton,
            ...(showAllStudents ? undefined : styles.active),
          }}
          onClick={() => setShowAllStudents(false)}
        >
          moja
        </div>
        {/* TODO figure out how to add multiple styles in [] */}
        <div
          style={{
            ...styles.chooseButton,
            ...(showAllStudents ? styles.active : undefined),
          }}
          onClick={() => setShowAllStudents(true)}
        >
          wszystkie
        </div>
      </div>
      <div style={styles.cardsContainer}>
        {(filteredStudents ?? students).map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isHighlighted={student.id === highlightedStudentId}
          />
        ))}
      </div>
    </div>
  );
};
