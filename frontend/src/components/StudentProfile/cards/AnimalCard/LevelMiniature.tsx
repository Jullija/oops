import { LevelType } from "../../../../__generated__/schema.graphql.types";
import { Styles } from "../../../../utils/Styles";
import { Avatar } from "../../../Avatar";

const styles: Styles = {
  opacity: {
    opacity: 0.6,
  },
};

type LevelMiniatureProps = {
  level: LevelType;
  withOpacity?: boolean;
};

export const LevelMiniature = ({
  level,
  withOpacity = false,
}: LevelMiniatureProps) => {
  return (
    <div>
      <div style={withOpacity ? styles.opacity : undefined}>
        <Avatar id={level.imageFile?.fileId} size="sm" />
      </div>
      <div>lvl. {level.ordinalNumber}</div>
      <div>{level.levelName}</div>
    </div>
  );
};