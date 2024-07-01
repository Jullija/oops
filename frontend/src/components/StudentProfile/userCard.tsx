import { UserPoints } from "../../utils/types";
import { Styles } from "../../utils/Styles";

type UserCardProps = {
  fullName?: string;
  index: number;
  points: UserPoints;
};

// TODO: those styles will be changed, i've just chat-gptd them
const styles: Styles = {
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
  userImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ccc", // Placeholder for image background
    marginBottom: "10px",
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

export function UserCard({ fullName, index, points }: UserCardProps) {
  const totalPoints = points.reduce((acc, point) => acc + +point.value, 0);

  return (
    <div style={styles.userCard}>
      <div style={styles.userImage}></div>
      <div>{fullName}</div>
      <div>Indeks Studenta: {index}</div>
      <div>Punkty całkowite: {totalPoints}</div>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${totalPoints / 5}%` }}></div>
      </div>
    </div>
  );
}
