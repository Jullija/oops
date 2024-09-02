import { Level } from "../../../hooks/StudentProfile/useAnimalData";
import { Styles } from "../../../utils/Styles";
import { PointsBar } from "../../PointsBar";
import { Avatar } from "../../Avatar";

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
  neighborLevelsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelContainer: {
    flex: 1,
  },
  opacity: {
    opacity: 0.5,
  },
};

type AnimalCardProps = {
  prevLevel?: Level;
  currLevel: Level;
  nextLevel?: Level;
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
      <Avatar id={currLevel.imageId} size="lg" />
      <div style={styles.title}>
        obecny level: {currLevel.name} - lvl. {currLevel.ordinalNumber}
      </div>
      {/* // TODO we have a problem with backend data inconsistency */}
      <PointsBar
        points={
          totalPoints > currLevel.minimalPoints
            ? totalPoints
            : currLevel.minimalPoints + 2
        }
        bounds={{
          lower: currLevel.minimalPoints,
          upper: currLevel.maximumPoints,
        }}
        showPoints
      />
      <div style={styles.neighborLevelsContainer}>
        <div style={styles.levelContainer}>
          {prevLevel && (
            <div>
              <div style={styles.opacity}>
                <Avatar id={prevLevel.imageId} size="sm" />
              </div>

              <div>lvl. {prevLevel.ordinalNumber}</div>
              <div>{prevLevel.name}</div>
            </div>
          )}
        </div>
        <div style={styles.levelContainer}>
          {nextLevel && (
            <div>
              <Avatar id={nextLevel.imageId} size="sm" />
              <div>lvl. {nextLevel.ordinalNumber}</div>
              <div>{nextLevel.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
