import { Styles } from "../../../../utils/Styles";
import { Avatar } from "../../../images/Avatar";
import { LevelsSection } from "./LevelsSection";
import { Level } from "../../../../hooks/StudentProfile";
import { LevelPointsBar } from "../../../bars/LevelPointsBar/LevelPointsBar";
import { AllLevelsBar } from "../../../bars/AllLevelsBar";

type AnimalCardProps = {
  prevLevel: Level | undefined;
  currLevel: Level;
  nextLevel: Level | undefined;
  totalPoints: number;
};

export const AnimalCard = ({
  currLevel,
  prevLevel,
  nextLevel,
  totalPoints,
}: AnimalCardProps) => {
  return (
    <div style={styles.card}>
      <Avatar id={currLevel.imageId} size="l" />
      <div style={styles.title}>
        obecny level: {currLevel.name} - lvl. {currLevel.ordinalNumber + 1}
      </div>
      <LevelPointsBar
        totalPoints={totalPoints}
        prevLevel={prevLevel}
        currLevel={currLevel}
        nextLevel={nextLevel}
      />
      <LevelsSection studentLevel={currLevel} />
      {/* TODO maybe this should be moved to student section */}
      <div style={styles.title}>Course progress</div>
      <AllLevelsBar totalPoints={totalPoints} />
    </div>
  );
};

const styles: Styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid blue",
    gap: 12,
    padding: 24,
  },
  title: {
    fontWeight: "bold",
  },
};
