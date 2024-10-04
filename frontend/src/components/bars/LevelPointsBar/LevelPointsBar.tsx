import { Level } from "../../../hooks/StudentProfile";
import { Styles } from "../../../utils/Styles";
import { ProgressBar } from "../ProgressBar";
import { LevelMiniature } from "./LevelMiniature";

type LevelPointsBarProps = {
  totalPoints: number;
  prevLevel: Level | undefined;
  currLevel: Level;
  nextLevel: Level | undefined;
};

export const LevelPointsBar = ({
  totalPoints,
  prevLevel,
  currLevel,
  nextLevel,
}: LevelPointsBarProps) => {
  return (
    <div>
      <ProgressBar
        points={totalPoints - currLevel.minimumPoints}
        bounds={{
          lower: 0,
          upper: currLevel.maximumPoints - currLevel.minimumPoints,
        }}
        showPoints
      />

      <div style={styles.levelMiniaturesContainer}>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {prevLevel && <LevelMiniature level={prevLevel} />}
        </div>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {nextLevel && <LevelMiniature level={nextLevel} disabled />}
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  levelMiniaturesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelMiniatureSpaceWrapper: {
    flex: 1,
  },
};
