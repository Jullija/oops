import { useLevelsData } from "../../hooks/StudentProfile";
import { ProgressBar } from "./ProgressBar";

type AllLevelsBarProps = {
  totalPoints: number;
};

export const AllLevelsBar = ({ totalPoints }: AllLevelsBarProps) => {
  const { levels, error, loading } = useLevelsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  if (levels.length <= 1) return <div>something went wrong</div>;

  return (
    <ProgressBar
      points={totalPoints}
      bounds={{ lower: 0, upper: levels[levels.length - 1].maximumPoints }}
      thresholds={levels.slice(1).map((level) => {
        return {
          //   label: `${level.ordinalNumber + 1}`,
          points: level.minimumPoints,
        };
      })}
      showPoints={true}
      label="Course progress"
    />
  );
};
