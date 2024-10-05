import { useLevelsData } from "../../hooks/StudentProfile";
import { ProgressBar } from "./ProgressBar";

type CourseProgressBarProps = {
  totalPoints: number;
};

export const CourseProgressBar = ({ totalPoints }: CourseProgressBarProps) => {
  const { levels, error, loading } = useLevelsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  if (levels.length < 2) return <div>levels length is lower than 2...</div>;

  const upperBound = levels[levels.length - 1].maximumPoints;

  return (
    <ProgressBar
      points={totalPoints}
      bounds={{ lower: 0, upper: upperBound }}
      thresholds={levels.slice(1).map((level) => {
        return {
          //   label: `${level.ordinalNumber + 1}`,
          points: level.minimumPoints,
        };
      })}
      showPoints={true}
    />
  );
};
