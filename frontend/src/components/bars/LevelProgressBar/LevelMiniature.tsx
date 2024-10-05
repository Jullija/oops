import { Level } from "../../../hooks/StudentProfile";
import { Avatar } from "../../images/Avatar";

type LevelMiniatureProps = {
  level: Level;
  disabled?: boolean;
};

export const LevelMiniature = ({
  level,
  disabled = false,
}: LevelMiniatureProps) => {
  return (
    <div>
      <Avatar id={level.imageId} size="s" disabled={disabled} />
      <div>lvl. {level.realLevelNumber}</div>
    </div>
  );
};
