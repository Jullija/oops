import { Level } from "../../../../hooks/StudentProfile";
import { useLevelsData } from "../../../../hooks/StudentProfile/useLevelsData";
import { Styles } from "../../../../utils/Styles";
import { AnimalWithTooltip } from "../../../images/AnimalWithTooltip";

type LevelsSectionProps = {
  studentLevel: Level;
};

export const LevelsSection = ({ studentLevel }: LevelsSectionProps) => {
  const { levels, loading, error } = useLevelsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.title}>All levels</div>
      <div style={styles.levelsContainer}>
        {levels?.map((level) => (
          <AnimalWithTooltip
            level={level}
            size={"xs"}
            disabled={level.ordinalNumber > studentLevel.ordinalNumber}
          />
        ))}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontWeight: "bold",
  },
  levelMiniaturesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelMiniatureSpaceWrapper: {
    flex: 1,
  },
  levelsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
};
