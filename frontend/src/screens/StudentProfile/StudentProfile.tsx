import { useState } from "react";
import {
  GetPointsByStudent,
  getCategory,
  getPoints,
  getProvider,
  getStudent,
  getStudents,
  getSubcategory,
} from "../../api";
import { Points, Styles } from "../../utils";
import { PointsForm } from "./PointsForm";
import { StudentPoints } from "./StudentPoints";
import { FormPoints } from "./types";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
};

export const StudentProfile = () => {
  const student = getStudents()[0];
  const [pointsList, setPointsList] = useState<Points[]>(
    GetPointsByStudent(student.id)
  );
  const handleAdd = (formPoints: FormPoints) => {
    const subcategory = getSubcategory(formPoints.subcategoryId);
    const category = getCategory(
      subcategory !== undefined ? subcategory.categoryId : "-1"
    );
    const student = getStudent(formPoints.studentId);
    const provider = getProvider(formPoints.providerId);

    if (subcategory && category && student && provider) {
      const points: Points = {
        id: getPoints().length.toString(),
        category: category,
        subcategory: subcategory,
        student: student,
        provider: provider,
        number: formPoints.number,
      };
      setPointsList([...pointsList, points]);
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <StudentPoints pointsList={pointsList} />
      <PointsForm studentId={student.id} handleAdd={handleAdd} />
    </div>
  );
};
