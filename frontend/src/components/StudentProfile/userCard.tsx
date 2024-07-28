import { useUserPointsImage } from "../../hooks/useUserPointsImage";
import { Styles } from "../../utils/Styles";
import { FILES_URL } from "../../utils/constants";
import { UserPoints } from "../../utils/types";

type UserCardProps = {
  fullName?: string;
  index: number;
  points: UserPoints;
};

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

export function UserCard({ fullName, index, points }: UserCardProps) {
  const totalPoints = points.reduce((acc, point) => acc + +point.value, 0);
  const { imageId, loading, error } = useUserPointsImage(totalPoints);

  const getImageContent = () => {
    if (loading || error) {
      return loading ? (
        <div>Loading image...</div>
      ) : (
        <div>Error loading image - {error?.message}</div>
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
    <div style={styles.userCard}>
      <div style={styles.userImageContainer}>{getImageContent()}</div>
      <div>
        <div>{fullName}</div>
        <div>Indeks Studenta: {index}</div>
        <div>Punkty całkowite: {totalPoints}</div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progress, width: `${totalPoints}%` }}></div>
        </div>
      </div>
    </div>
  );
}
