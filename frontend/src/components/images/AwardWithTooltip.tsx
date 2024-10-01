import { AwardImage } from "./AwardImage";
import { Bonus } from "../../hooks/StudentProfile/useBonusesCardData";
import { TooltipWrapper } from "../TooltipWrapper";
import { dateOptions } from "../../utils/constants";

type AwardWithTooltipProps = {
  bonus: Bonus;
};

export const AwardWithTooltip = ({ bonus }: AwardWithTooltipProps) => {
  const displayDate = new Date(bonus.updatedAt ?? bonus.createdAt);

  return (
    <TooltipWrapper
      tooltipContent={
        <div>
          <div>{bonus.award.name}</div>
          <div>points: {bonus.award.value.toFixed(2)}</div>
          <div>{displayDate.toLocaleDateString("pl-PL", dateOptions)}</div>
        </div>
      }
    >
      <AwardImage id={bonus.award.imgId} size={"m"} />
    </TooltipWrapper>
  );
};
