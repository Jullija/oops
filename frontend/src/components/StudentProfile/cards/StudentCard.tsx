import { Styles } from "../../../utils/Styles";
import { StudentCardData } from "../../../hooks/StudentProfile/useStudentData";
import { Avatar } from "../../Avatar";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid blue",
    gap: 12,
    padding: 24,
  },
  studentName: {
    fontWeight: "bold",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: "10px",
  },
  progress: {
    height: "10px",
    backgroundColor: "#4caf50",
  },
};

export function StudentCard({
  displayName,
  index,
  group,
  totalPoints,
  avatarId,
}: StudentCardData) {
  return (
    <div style={styles.container}>
      <Avatar id={avatarId} size="lg" />
      <div style={styles.studentName}>{displayName}</div>
      <div>indeks: {index}</div>
      <div>
        grupa:{" "}
        {group
          ? `${group.name}, ${group.weekday.name} ${group.time.start}-${group.time.end}`
          : "brak"}
      </div>
      <div>prowadzący: {group ? group.teacherDisplayName : "brak"}</div>
      <div>punkty: {totalPoints}</div>
    </div>
  );
}
