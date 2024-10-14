import { Styles } from "../../utils/Styles";
import { Avatar } from "../images/Avatar";
import { EditableIndicator } from "../EditableIndicator";
import { StudentFromList } from "./StudentsList";

type StudentsListCardProps = {
  student: StudentFromList;
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
      <Avatar id={student.avatarId} size={"s"} />
      <div style={styles.textContainer}>
        <div style={styles.title}>{student.firstName}</div>
        <div style={styles.title}>{student.secondName}</div>
        <div style={styles.bottomContainer}>
          <div style={styles.groupName}>{student.group.name}</div>
          {withEditableRights && <EditableIndicator />}
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
    cursor: "pointer",
    width: 200,
    padding: 12,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomContainer: {
    display: "flex",
  },
  groupName: {
    flex: 1,
  },
};
