import { Level } from "../../../../../hooks/Edition/useLevelsSection";
import { EMPTY_FIELD_STRING } from "../../../../../utils/constants";
import { Styles } from "../../../../../utils/Styles";
import { LevelCard } from "./LevelCard";

type LevelsListProps = {
  levels: Level[];
  selectedLevels: Level[];
  handleSelectLevelClick: (level: Level) => void;
  title: string;
};

export const LevelsList = ({
  levels,
  selectedLevels,
  handleSelectLevelClick,
  title,
}: LevelsListProps) => {
  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.container}>
        {levels.length !== 0
          ? levels.map((level) => (
              <LevelCard
                level={level}
                isSelected={
                  !!selectedLevels.find((c) => c.levelId === level.levelId)
                }
                onSelectClick={() => handleSelectLevelClick(level)}
              />
            ))
          : EMPTY_FIELD_STRING}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  title: {
    color: "blue",
  },
};
