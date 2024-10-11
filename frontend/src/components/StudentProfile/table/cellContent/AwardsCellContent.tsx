import { Points } from "../../../../hooks/StudentProfile";
import { EMPTY_FIELD_STRING } from "../../../../utils/constants";
import { Styles } from "../../../../utils/Styles";
import { AwardWithTooltip } from "../../../images/AwardWithTooltip";

type AwardsCellContentProps = {
  points: Points;
};

export const AwardsCellContent = ({ points }: AwardsCellContentProps) => {
  const bonuses = points.points.partialBonusType;

  if (bonuses.length === 0) {
    return <div>{EMPTY_FIELD_STRING}</div>;
  }

  // TODO better map
  return (
    <div style={styles.awardsContainer}>
      {bonuses.map((bonus) => {
        return (
          <AwardWithTooltip
            bonus={{
              id: bonus?.bonuses.bonusId ?? "",
              award: {
                id: bonus?.bonuses.award.awardId ?? "",
                name: bonus?.bonuses.award.awardName ?? "",
                description: bonus?.bonuses.award.description ?? "",
                value: parseFloat(bonus?.bonuses.award.awardValue ?? "-1"),
                imgId: bonus?.bonuses.award.imageFile?.fileId ?? "",
              },
              updatedAt: bonus?.bonuses.updatedAt ?? "",
              createdAt: bonus?.bonuses.createdAt ?? "",
            }}
            size={"m"}
          />
        );
      })}
    </div>
  );
};

const styles: Styles = {
  awardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    maxWidth: 240,
    flexWrap: "wrap",
  },
};
