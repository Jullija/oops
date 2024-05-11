import { getStudents } from "../../api";
import { Points } from "../../utils";
import { PointsForm } from "./PointsForm";
import { PointsTable } from "./PointsTable/PointsTable";

export const StudentProfile = () => {
  const student = getStudents()[0];
  const handleAdd = (points: Points) => {
    console.log("handle add points: ", points);
  };

  return (
    <>
      <PointsTable student={student} />
      <PointsForm handleAdd={handleAdd} />
    </>
  );
};
