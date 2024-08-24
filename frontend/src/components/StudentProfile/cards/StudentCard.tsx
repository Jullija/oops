import { Styles } from "../../../utils/Styles";
import { StudentCardData } from "../../../hooks/StudentProfile/useStudentData";
import { FILES_URL } from "../../../utils/constants";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid blue",
    gap: 12,
    padding: 24,
    width: 240,
  },
  userCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
  },
  studentName: {
    fontWeight: "bold",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    borderRadius: "8px",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
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
  level,
  group,
  totalPoints,
  imageIds,
}: StudentCardData) {
  const getImg = (id?: string) => {
    return (
      <div style={{ position: "relative", flex: 1 }}>
        <img
          src={`${FILES_URL}${id}`}
          alt={`img id ${id}`}
          style={styles.img}
        />
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        {getImg(imageIds.avatar)}
        {getImg(imageIds.level)}
      </div>
      <div style={styles.studentName}>{displayName}</div>
      <div>level: {level}</div>
      <div>indeks: {index}</div>
      <div>
        grupa:{" "}
        {group
          ? `${group.name}, ${group.weekday} ${group.time.start}-${group.time.end}`
          : "brak"}
      </div>
      <div>prowadzący: {group ? group.teacherDisplayName : "brak"}</div>
      <div>punkty: {totalPoints}</div>
    </div>
  );
}
