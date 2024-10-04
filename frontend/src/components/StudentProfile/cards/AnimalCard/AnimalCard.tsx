import { Styles } from "../../../../utils/Styles";
import { PointsBar } from "../../../PointsBar";
import { Avatar } from "../../../images/Avatar";
import { LevelMiniature } from "./LevelMiniature";
import { LevelsSection } from "./LevelsSection";
import { Level } from "../../../../hooks/StudentProfile";

const styles: Styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid blue",
    gap: 12,
    padding: 24,
  },
  title: {
    fontWeight: "bold",
  },
  levelMiniaturesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelMiniatureSpaceWrapper: {
    flex: 1,
  },
};

type AnimalCardProps = {
  prevLevel: Level | undefined;
  currLevel: Level;
  nextLevel: Level | undefined;
  totalPoints: number;
};

export const AnimalCard = ({
  currLevel,
  prevLevel,
  nextLevel,
  totalPoints,
}: AnimalCardProps) => {
  return (
    <div style={styles.card}>
      <Avatar id={currLevel.imageId} size="l" />
      <div style={styles.title}>
        obecny level: {currLevel.name} - lvl. {currLevel.ordinalNumber}
      </div>
      <PointsBar
        points={totalPoints - currLevel.minimumPoints}
        bounds={{
          lower: 0,
          upper: currLevel.maximumPoints - currLevel.minimumPoints,
        }}
        showPoints
      />

      {/* // TODO maybe separate component */}
      <div style={styles.levelMiniaturesContainer}>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {prevLevel && <LevelMiniature level={prevLevel} />}
        </div>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {nextLevel && <LevelMiniature level={nextLevel} disabled />}
        </div>
      </div>

      <LevelsSection studentLevel={currLevel} />
    </div>
  );
};
