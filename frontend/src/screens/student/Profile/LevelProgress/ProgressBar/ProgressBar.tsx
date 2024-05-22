import "./styles.css";

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
      <div className="bar-container">
        <div className="bar-fill" style={getWidthFillStyle()} />
        <div className="progress-text">
          {value}/{maxValue}
        </div>
      </div>
    </div>
  );
};
