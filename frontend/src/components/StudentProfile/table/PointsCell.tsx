import { Points } from "../../../hooks/StudentProfile/useStudentData";
import { Styles } from "../../../utils/Styles";

type PointsCellProps = {
  points: Points;
};

export const PointsCell = ({ points }: PointsCellProps) => {
  const bonusesPoints =
    points.points.partialBonusType.length === 0
      ? undefined
      : points.points.partialBonusType.reduce(
          (total, bonus) => total + (bonus?.partialValue ?? 0),
          0,
        );

  const purePoints = points.points.purePoints?.value
    ? parseFloat(points.points.purePoints?.value)
    : undefined;

  const allPoints = (purePoints ?? 0) + (bonusesPoints ?? 0);

  const getPointsDescriptionString = (): string | undefined => {
    if (!bonusesPoints && !purePoints) {
      return undefined;
    }
    if (!bonusesPoints) {
      return undefined;
    }
    return `${purePoints ? purePoints.toFixed(2) : "---"} + ${bonusesPoints.toFixed(2)}`;
  };

  const description = getPointsDescriptionString();

  return (
    <div style={styles.container}>
      <div style={styles.title}>{allPoints.toFixed(2)}</div>
      {description && <div>{description}</div>}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
};
