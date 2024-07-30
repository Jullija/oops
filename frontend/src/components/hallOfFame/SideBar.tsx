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
        <HallOfFameStudentSearcher
          onInputChange={onInputChange}
          students={students}
        />
        <button
          style={styles.scrollButton}
          ref={buttonRef}
          onClick={scrollToStudent}
        >
          scroll to me
        </button>
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
