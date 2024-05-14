import { useRef } from "react";
import { getStudents } from "../api";
import { Student } from "../utils";

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
    <>
      <button
        style={{ marginLeft: 12, marginBottom: 12 }}
        onClick={scrollToStudent}
      >
        scroll to me
      </button>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginLeft: 12,
          marginRight: 12,
          marginBottom: 12,
        }}
      >
        {students.map((s, index) => (
          <div
            key={s.id}
            id={`student-${s.id}`}
            style={{
              display: "flex",
              border: s.id === studentId ? "2px solid blue" : "1px solid black",
              gap: 12,
              padding: 12,
            }}
          >
            <div style={{ width: 180 }}>
              {index + 1}. {s.name}
            </div>
            <div>{s.level}</div>
          </div>
        ))}
      </div>
    </>
  );
};
