import { Styles } from "../../../../utils/Styles";
import { PointsBar } from "../../../PointsBar";
import { Avatar } from "../../../images/Avatar";
import { LevelMiniature } from "./LevelMiniature";
import { LevelType } from "../../../../__generated__/schema.graphql.types";

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
  prevLevel?: LevelType;
  currLevel: LevelType;
  nextLevel?: LevelType;
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
      <Avatar id={currLevel.imageFile?.fileId} size="l" />
      <div style={styles.title}>
        obecny level: {currLevel.levelName} - lvl. {currLevel.ordinalNumber}
      </div>
      {/* // TODO we have a problem with backend data inconsistency */}
      <PointsBar
        points={
          totalPoints > currLevel.minimumPoints
            ? totalPoints
            : currLevel.minimumPoints + 2
        }
        bounds={{
          lower: currLevel.minimumPoints,
          upper: currLevel.maximumPoints,
        }}
        showPoints
      />

      {/* // TODO maybe separate component */}
      <div style={styles.levelMiniaturesContainer}>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {prevLevel && <LevelMiniature level={prevLevel} />}
        </div>
        <div style={styles.levelMiniatureSpaceWrapper}>
          {nextLevel && <LevelMiniature level={nextLevel} withOpacity />}
        </div>
      </div>
    </div>
  );
};
