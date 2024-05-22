import { Styles } from "../../../../../utils";

const styles: Styles = {
  barContainer: {
    border: "1px solid black",
    flex: 1,
    height: "20px",
    position: "relative",
  },
  barFill: {
    height: "100%",
    backgroundColor: "lightblue",
  },
  progressText: {
    position: "absolute",
    top: 0,
  },
};

type ProgressBarProps = {
  value: number;
  maxValue: number;
};

export const ProgressBar = ({ value, maxValue }: ProgressBarProps) => {
  const getWidthFillStyle = () => {
    const percentageProgress = (value / maxValue) * 100;
    return { width: `${percentageProgress}%` };
  };

  return (
    <div>
      <div style={styles.barContainer}>
        <div style={{ ...styles.barFill, ...getWidthFillStyle() }} />
        <div style={styles.progressText}>
          {value}/{maxValue}
        </div>
      </div>
    </div>
  );
};
