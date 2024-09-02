import { Level } from "../../../../hooks/StudentProfile/useAnimalData";
import { Styles } from "../../../../utils/Styles";
import { Avatar } from "../../../Avatar";

const styles: Styles = {
  opacity: {
    opacity: 0.5,
  },
};

type LevelMiniatureProps = {
  level: Level;
  withOpacity?: boolean;
};

export const LevelMiniature = ({
  level,
  withOpacity = false,
}: LevelMiniatureProps) => {
  return (
    <div>
      <div style={withOpacity ? styles.opacity : undefined}>
        <Avatar id={level.imageId} size="sm" />
      </div>
      <div>lvl. {level.ordinalNumber}</div>
      <div>{level.name}</div>
    </div>
  );
};
