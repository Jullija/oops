import { useRef } from "react";
import { getStudents } from "../api";
import { Student, Styles } from "../utils";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    margin: 12,
  },
  scrollButton: {
    width: 100,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  item: {
    display: "flex",
    border: "1px solid black",
    gap: 12,
    padding: 12,
  },
  firstCell: {
    width: 180,
  },
};

type HallOfFameProps = {
  studentId: string;
};

export const HallOfFame = ({ studentId = "6" }: HallOfFameProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToStudent = () => {
    const studentElement = document.getElementById(`student-${studentId}`);
    if (studentElement) {
      studentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const students = getStudents();
  students.sort((a: Student, b: Student) => b.level - a.level);
  return (
    <div style={styles.container}>
      <button style={styles.scrollButton} onClick={scrollToStudent}>
        scroll to me
      </button>
      <div ref={containerRef} style={styles.itemsContainer}>
        {/* TODO separate component */}
        {students.map((s, index) => (
          <div
            key={s.id}
            id={`student-${s.id}`}
            style={{
              ...styles.item,
              border: s.id === studentId ? "2px solid blue" : "1px solid black",
            }}
          >
            <div style={styles.firstCell}>
              {index + 1}. {s.name}
            </div>
            <div>{s.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
