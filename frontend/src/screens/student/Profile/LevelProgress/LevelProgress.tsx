import { getLevel, getLevels } from "../../../../api/levels";
import { Student, Styles } from "../../../../utils";
import { ProgressBar } from "./ProgressBar";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "12px",
  },
  bigAvatarPlaceholder: {
    backgroundColor: "lightblue",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
  },
  levelsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  levelAvatarsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  // TODO avatar to single component
  smallAvatarPlaceholder: {
    backgroundColor: "lightblue",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
};

type LevelProgressProps = {
  student: Student;
};

export const LevelProgress = ({ student }: LevelProgressProps) => {
  const level = student.level;
  const maxLevel = getLevels().length;
  const lowerLevel = level === maxLevel ? level - 1 : level;
  const upperLevel = level === maxLevel ? level : level + 1;
  const maxUpperLevelExperience = getLevel(upperLevel)?.maxExperience;

  // TODO max level
  // TODO what happens if max level reached

  if (!maxUpperLevelExperience) {
    return <p>wrong max upper level</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.bigAvatarPlaceholder} />

      <div style={styles.levelsContainer}>
        <div>{upperLevel} lvl</div>
        <div>{lowerLevel} lvl</div>
      </div>

      <ProgressBar
        value={student.experience}
        maxValue={maxUpperLevelExperience}
      />

      <div style={styles.levelAvatarsContainer}>
        <div style={styles.smallAvatarPlaceholder} />
        <div style={styles.smallAvatarPlaceholder} />
      </div>
    </div>
  );
};
