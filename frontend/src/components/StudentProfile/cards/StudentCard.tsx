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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
  imgPlaceholder: {
    width: "200px",
    height: "200px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "8px",
  },
  userImage: {
    width: "100%",
    height: "100%",
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
}: StudentCardData) {
  // TODO it should be already fetched
  const loading = false;
  const error: Error | undefined = undefined;
  const imageId = "1";

  const getImageContent = () => {
    if (loading || error) {
      return loading ? (
        <div>Loading image...</div>
      ) : (
        <div>Error loading image</div>
      );
    }
    if (imageId) {
      return (
        <img
          src={`${FILES_URL}${imageId}`}
          alt={`Image id ${imageId}`}
          style={styles.userImage}
        />
      );
    }
    return <div style={styles.userImageContainer} />;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Student</div>
      <div style={styles.userImageContainer}>{getImageContent()}</div>
      <div>{displayName}</div>
      <div>level: {level}</div>
      <div>index: {index}</div>
      <div>group: {group.name}</div>
      <div>
        {group.weekday} {group.time.start}-{group.time.end}
      </div>
      <div>prowadzący: {group.teacherDisplayName}</div>
      <div>total points: {totalPoints}</div>
    </div>
  );
}
