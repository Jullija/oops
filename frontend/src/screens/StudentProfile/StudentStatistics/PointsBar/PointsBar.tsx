import "./styles.css";

type PointsBarProps = {
  experience: number;
  maxExperience: number;
};

export const PointsBar = ({ experience, maxExperience }: PointsBarProps) => {
  const getWidthFillStyle = () => {
    return { width: `${(experience / maxExperience) * 100}%` };
  };
  return (
    <div>
      <div className="bar-container">
        <div className="bar-fill" style={getWidthFillStyle()} />
        <div className="experience-text">
          {experience}/{maxExperience} exp
        </div>
      </div>
    </div>
  );
};
