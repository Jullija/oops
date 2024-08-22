import { Styles } from "../../../utils/Styles";
import { HallOfFameStudentData } from "../StudentCard";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 200,
  },
  studentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: "100%",
    backgroundColor: "violet",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 12,
  },
  place: {
    backgroundColor: "white",
    padding: 4,
  },
};

type PodiumItemProps = {
  student: HallOfFameStudentData;
  place: 1 | 2 | 3;
};

export const PodiumItem = ({ student, place }: PodiumItemProps) => {
  const getBoxHeight = () => {
    if (place === 1) {
      return 200;
    }
    return place === 2 ? 150 : 110;
  };

  return (
    <div style={styles.container}>
      <div style={styles.studentContainer}>
        <div style={styles.imagePlaceholder} />
        <div>{student.nick}</div>
      </div>
      <div
        style={{
          ...styles.box,
          height: getBoxHeight(),
          backgroundColor: place === 1 ? "gray" : "lightgrey",
        }}
      >
        <div style={styles.place}>{place}</div>
      </div>
    </div>
  );
};
