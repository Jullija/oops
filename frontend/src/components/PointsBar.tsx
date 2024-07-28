import { Styles } from "../utils/Styles";

const styles: Styles = {
  bar: { backgroundColor: "lightgrey", width: "100%" },
  filled: { height: 24, backgroundColor: "lightblue" },
};

export type PointsBarProps = {
  points: number;
  bounds: { lower?: number; upper: number };
  showPoints?: boolean;
  label?: string;
};

export const PointsBar = ({
  points,
  bounds,
  showPoints,
  label,
}: PointsBarProps) => {
  if ((bounds.lower && points < bounds.lower) || points < 0) {
    throw new Error("points cannot be lower than lower bound or negative");
  }

  const diff = bounds.lower === undefined ? 0 : bounds.lower;
  const filledPercent = Math.min(
    Math.round(((points - diff) / (bounds.upper - diff)) * 100),
    100,
  );

  return (
    <div>
      {label && <div>{label}</div>}
      {showPoints && (
        <div>
          {points}/{bounds.upper}
        </div>
      )}
      <div style={styles.bar}>
        <div style={{ ...styles.filled, width: `${filledPercent}%` }} />
      </div>
    </div>
  );
};
