import { Styles } from "../../utils/Styles";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  empty: {
    height: 24,
    width: "100%",
    backgroundColor: "lightgrey",
    position: "relative",
  },
  filled: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  pointsContainer: {
    position: "absolute",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export type ProgressBarProps = {
  points: number;
  bounds: { lower: number; upper: number };
  showPoints?: boolean;
  label?: string;
};

export const ProgressBar = ({
  points,
  bounds,
  showPoints,
  label,
}: ProgressBarProps) => {
  if (points < 0) {
    throw new Error("points cannot be negative number");
  }

  if (points < bounds.lower) {
    throw new Error("points cannot be lower than lower bound");
  }

  const diff = bounds.lower;
  const filledPercent = Math.min(
    Math.round(((points - diff) / (bounds.upper - diff)) * 100),
    100,
  );

  return (
    <div style={styles.container}>
      {label && <div>{label}</div>}
      <div style={styles.empty}>
        {showPoints && (
          <div style={styles.pointsContainer}>
            {points.toFixed(2)}/{bounds.upper}
          </div>
        )}
        <div style={{ ...styles.filled, width: `${filledPercent}%` }} />
      </div>
    </div>
  );
};
