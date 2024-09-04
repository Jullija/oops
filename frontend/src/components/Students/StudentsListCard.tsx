import { Styles } from "../../utils/Styles";
import { StudentList } from "./StudentsList";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    width: 240,
    height: 120,
    cursor: "pointer",
    padding: 12,
    gap: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
};

type StudentsListCardProps = {
  student: StudentList;
  onClick: () => void;
  withEditableRights: boolean;
};

export const StudentsListCard = ({
  student,
  onClick,
  withEditableRights,
}: StudentsListCardProps) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <div>{student.firstName}</div>
      <div>{student.secondName}</div>
      {withEditableRights && <div style={{ color: "blue" }}>editable</div>}
    </div>
  );
};
