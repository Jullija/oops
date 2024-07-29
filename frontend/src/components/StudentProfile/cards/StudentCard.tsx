import { Styles } from "../../../utils/Styles";
import { StudentCardData } from "../../../hooks/StudentProfile/useStudentData";

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
};

export function StudentCard({
  displayName,
  index,
  level,
  // group,
  totalPoints,
}: StudentCardData) {
  // const { imageId, loading, error } = useUserPointsImage(totalPoints);

  return (
    <div style={styles.container}>
      <div style={styles.title}>Student</div>
      {/* <div style={styles.userImageContainer}>
        {loading && <div>Loading image...</div>}
        {error && <div>Error loading image</div>}
        {imageId && !loading && !error && (
          <ImageCache
            imageId={imageId}
            style={styles.userImageContainer}
            imgStyle={styles.userImage}
          />
        )}
      </div> */}
      <div>{displayName}</div>
      <div>level: {level}</div>
      <div>index: {index}</div>
      {/* <div>group: {group.name}</div>
      <div>
        {group.weekday} {group.time.start}-{group.time.end},{" "}
        {group.teacherDisplayName}
      </div> */}
      <div>total points: {totalPoints}</div>
    </div>
  );
}
