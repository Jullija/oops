import { useCallback, useEffect, useRef } from "react";
import { Styles } from "../../utils/Styles";
import { HallOfFameStudentData, StudentCard } from "./StudentCard";

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

  return (
    <div style={styles.container}>
      <div style={styles.sideBarMenu}>
        <button
          style={styles.scrollButton}
          ref={buttonRef}
          onClick={scrollToStudent}
        >
          scroll to me
        </button>
      </div>
      <div style={styles.cardsContainer}>
        {students.map((s, index) => (
          <StudentCard
            key={s.id}
            data={s}
            position={index}
            isHighlighted={s.id === highlightedStudentId}
          />
        ))}
      </div>
    </div>
  );
};
