import { HallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { Styles } from "../../utils/Styles";
import { FILES_URL } from "../../utils/constants";

const styles: Styles = {
  item: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 3fr 2fr 1fr",
    alignItems: "center",
    border: "1px solid black",
    gap: 12,
    padding: 6,
    boxSizing: "border-box",
    width: "100%",
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "gray",
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    overflow: "clip",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default function HallOfFameRow({
  student,
  index,
  isCurrentUser,
}: {
  student: HallOfFameQuery["hallOfFame"][number];
  index: number;
  isCurrentUser: boolean;
}) {
  return (
    <div
      id={`student-${student.userId}`}
      style={{
        ...styles.item,
        border: isCurrentUser ? "2px solid blue" : "1px solid black",
      }}
    >
      <div>{`${index + 1}.`}</div>
      <div style={styles.imageContainer}>
        {student.imageFileId ? (
          <img
            src={`${FILES_URL}${student.imageFileId}`}
            alt={`Image of ${student.nick}`}
            style={styles.image}
          />
        ) : (
          <div style={styles.logoPlaceholder} />
        )}
      </div>
      <div>{student.nick}</div>
      <div>{student.levelName}</div>
      <div>{student.sumOfPoints}</div>
    </div>
  );
}
