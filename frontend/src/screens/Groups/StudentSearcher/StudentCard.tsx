import { useNavigate } from "react-router-dom";
import { ShortStudent, Styles } from "../../../utils";
import { pathsGenerator } from "../../../router";

type StudentCardProps = {
  student: ShortStudent;
};

const styles: Styles = {
  container: {
    border: "1px solid black",
    padding: 12,
  },
};

export const StudentCard = ({ student }: StudentCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      style={styles.container}
      onClick={() =>
        navigate(pathsGenerator.teacher.StudentProfile(student.id))
      }
    >
      {student.fullName}
    </div>
  );
};
