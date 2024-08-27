import { NeighborLevel } from "../../../hooks/StudentProfile/useAnimalData";
import { Styles } from "../../../utils/Styles";
import { PointsBar } from "../../PointsBar";

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
};

type AnimalCardProps = {
  prevLevel?: NeighborLevel;
  currLevel?: NeighborLevel;
  nextLevel?: NeighborLevel;
  totalPoints: number;
};

export const AnimalCard = ({
  currLevel,
  prevLevel,
  nextLevel,
  totalPoints,
}: AnimalCardProps) => {
  if (!currLevel) {
    return (
      <div style={styles.card}>
        something went wrong - currLevel is undefined{" "}
      </div>
    );
  }

  console.log("CURRENT: ", currLevel);

  return (
    <div style={styles.card}>
      <div style={styles.title}>
        {currLevel.name} - lvl. {currLevel.ordinalNumber}
      </div>

      <PointsBar
        points={totalPoints}
        bounds={{
          lower: parseInt(currLevel.minimumPoints),
          upper: parseInt(currLevel.maximumPoints),
        }}
        showPoints
      />
      <div style={styles.neighborLevelsContainer}>
        <div style={styles.levelContainer}>
          {prevLevel && (
            <div>
              <div>lvl. {prevLevel.ordinalNumber}</div>
              <div>{prevLevel.name}</div>
            </div>
          )}
        </div>
        <div style={styles.levelContainer}>
          {nextLevel && (
            <div>
              <div>lvl. {nextLevel.ordinalNumber}</div>
              <div>{nextLevel.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
