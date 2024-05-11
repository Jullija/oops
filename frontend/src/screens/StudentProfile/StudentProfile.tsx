import { useState } from "react";
import { GetPointsByStudent, getStudents } from "../../api";
import { Points } from "../../utils";
import { PointsForm } from "./PointsForm";
import { PointsTable } from "./PointsTable/PointsTable";

export const StudentProfile = () => {
  const student = getStudents()[0];
  const [pointsList, setPointsList] = useState<Points[]>(
    GetPointsByStudent(student.id)
  );
  const handleAdd = (points: Points) => {
    setPointsList([...pointsList, points]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <PointsTable pointsList={pointsList} />
      <PointsForm handleAdd={handleAdd} />
    </div>
  );
};
