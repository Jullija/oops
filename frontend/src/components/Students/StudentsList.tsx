import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/common/useUser";
import { pathsGenerator } from "../../router/paths";
import { Styles } from "../../utils/Styles";
import { StudentsListCard } from "./StudentsListCard";
import { Group } from "../../hooks/common/useGroupsData";

const styles: Styles = {
  studentsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    margin: 12,
  },
};

export type StudentList = {
  id: string;
  avatarId?: string;
  firstName: string;
  secondName: string;
  group: Group;
};

type StudentsListProps = {
  students: StudentList[];
};

export const StudentsList = ({ students: groups }: StudentsListProps) => {
  const navigate = useNavigate();
  const user = useUser();

  return (
    <div style={styles.studentsContainer}>
      {groups.map((student) => (
        <StudentsListCard
          key={student.id}
          student={student}
          onClick={() =>
            navigate(pathsGenerator.teacher.StudentProfile(student.id))
          }
          withEditableRights={student.group.teacher.id === user.user.userId}
        />
      ))}
    </div>
  );
};
