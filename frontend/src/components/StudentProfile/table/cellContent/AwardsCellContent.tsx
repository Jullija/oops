import { Points } from "../../../../hooks/StudentProfile/useStudentData";
import { EMPTY_FIELD_STRING } from "../../../../utils/constants";
import { Styles } from "../../../../utils/Styles";
import { AwardImage } from "../../../images/AwardImage";

type AwardsCellContentProps = {
  points: Points;
};

export const AwardsCellContent = ({ points }: AwardsCellContentProps) => {
  const bonuses = points.points.partialBonusType;

  if (bonuses.length === 0) {
    return <div>{EMPTY_FIELD_STRING}</div>;
  }

  return (
    <div style={styles.awardsContainer}>
      {bonuses.map((bonus) => {
        return (
          <AwardImage id={bonus?.bonuses.award.imageFile?.fileId} size="s" />
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
