import { Styles } from "../../../utils/Styles";
import { Avatar } from "../../images/Avatar";
import { HallOfFameStudentData } from "../HallOfFameStudentCard";

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
        <Avatar id={student.avatarImgId} size={"m"} />
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
