import { TooltipWrapper } from "../TooltipWrapper";
import { Styles } from "../../utils/Styles";
import { Avatar, AvatarSize } from "./Avatar";
import { Level } from "../../hooks/StudentProfile";

type AnimalWithTooltipProps = {
  level: Level;
  size: AvatarSize;
  disabled: boolean;
};

export const AnimalWithTooltip = ({
  level,
  size,
  disabled,
}: AnimalWithTooltipProps) => {
  return (
    <TooltipWrapper
      tooltipContent={
        <div style={styles.container}>
          <div style={styles.title}>{level.name}</div>
          <div>lvl. {level.realLevelNumber}</div>
          <div>
            from {level.minimumPoints} to {level.maximumPoints} points
          </div>
        </div>
      }
    >
      <Avatar id={level.imageId} size={size} disabled={disabled} />
    </TooltipWrapper>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontWeight: "bold",
  },
};
