import { TooltipWrapper } from "../TooltipWrapper";
import { Styles } from "../../utils/Styles";
import { Avatar, AvatarSize } from "./Avatar";

type AnimalWithTooltipProps = {
  name: string;
  ordinal: number;
  max: number;
  min: number;
  imageId: string;
  size: AvatarSize;
  disabled: boolean;
};

export const AnimalWithTooltip = ({
  name,
  ordinal,
  max,
  min,
  size,
  imageId,
  disabled,
}: AnimalWithTooltipProps) => {
  return (
    <TooltipWrapper
      tooltipContent={
        <div style={styles.container}>
          <div style={styles.title}>{name}</div>
          <div>lvl. {ordinal}</div>
          <div>
            from {min} to {max} points
          </div>
        </div>
      }
    >
      <Avatar id={imageId} size={size} disabled={disabled} />
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
