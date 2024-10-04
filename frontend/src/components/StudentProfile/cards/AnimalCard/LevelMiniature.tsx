import { LevelType } from "../../../../__generated__/schema.graphql.types";
import { Avatar } from "../../../images/Avatar";

type LevelMiniatureProps = {
  level: LevelType;
  disabled?: boolean;
};

export const LevelMiniature = ({
  level,
  disabled = false,
}: LevelMiniatureProps) => {
  return (
    <div>
      <Avatar id={level.imageFile?.fileId} size="s" disabled={disabled} />
      <div>lvl. {level.ordinalNumber}</div>
      <div>{level.levelName}</div>
    </div>
  );
};
