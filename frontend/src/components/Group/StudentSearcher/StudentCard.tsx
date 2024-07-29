import { useNavigate } from "react-router-dom";
import { ShortStudent } from "../../../utils/types";
import { Styles } from "../../../utils/Styles";
import { pathsGenerator } from "../../../router/paths";

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
