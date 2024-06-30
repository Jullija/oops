import { HallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { Styles } from "../../utils/Styles";

const styles: Styles = {
  item: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 3fr 2fr 1fr",
    alignItems: "center",
    border: "1px solid black",
    gap: 12,
    padding: 12,
    boxSizing: "border-box",
    width: "100%",
  },
  logoPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "gray",
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
      <div>
        <div style={styles.logoPlaceholder} />
      </div>
      <div>{student.nick}</div>
      <div>{student.levelName}</div>
      <div>{student.sumOfPoints}</div>
    </div>
  );
}
