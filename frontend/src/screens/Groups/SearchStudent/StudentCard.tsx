import { useNavigate } from "react-router-dom";
import { Styles } from "../../../utils";
import { pathsGenerator } from "../../../router";

type StudentCardProps = {
  fullName?: string;
  userId: string;
};

const styles: Styles = {
  container: {
    border: "1px solid black",
    padding: 12,
  },
};

export const StudentCard = ({ fullName, userId }: StudentCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      style={styles.container}
      onClick={() => navigate(pathsGenerator.teacher.StudentProfile(userId))}
    >
      {fullName}
    </div>
  );
};
