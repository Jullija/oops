import { Styles } from "../../../utils/Styles";
import { HallOfFameStudentData } from "../HallOfFameStudentCard";
import { PodiumItem } from "./PodiumItem";

type PodiumProps = {
  students: HallOfFameStudentData[];
};

export const Podium = ({ students }: PodiumProps) => {
  if (students.length < 3) {
    throw new Error(
      "podium will not be rendered if there are less than 3 students",
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.podium}>
        <PodiumItem student={students[1]} place={2} />
        <PodiumItem student={students[0]} place={1} />
        <PodiumItem student={students[2]} place={3} />
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  podium: {
    display: "flex",
    alignItems: "flex-end",
  },
};
