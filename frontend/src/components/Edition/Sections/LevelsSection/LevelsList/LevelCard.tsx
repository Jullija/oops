import { Level } from "../../../../../hooks/Edition/useLevelsSection";
import { Styles } from "../../../../../utils/Styles";

type LevelCardProps = {
  level: Level;
  isSelected: boolean;
  onSelectClick: () => void;
};

export const LevelCard = ({
  level,
  isSelected,
  onSelectClick,
}: LevelCardProps) => {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "pink" : undefined,
      }}
    >
      <div>{level.name}</div>
      <button onClick={onSelectClick}>
        {isSelected ? "unselect" : "select"}
      </button>
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
