import { Award } from "../../../../../hooks/Edition/useAwardsSection";
import { EMPTY_FIELD_STRING } from "../../../../../utils/constants";
import { Styles } from "../../../../../utils/Styles";
import { AwardCard } from "./AwardCard";

type AwardsListProps = {
  awards: Award[];
  selectedAwards: Award[];
  handleSelectAwardClick: (award: Award) => void;
  title: string;
};

export const AwardsList = ({
  awards: awards,
  selectedAwards,
  handleSelectAwardClick,
  title,
}: AwardsListProps) => {
  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.container}>
        {awards.length !== 0
          ? awards.map((award) => (
              <AwardCard
                award={award}
                isSelected={
                  !!selectedAwards.find((a) => a.awardId === award.awardId)
                }
                onSelectClick={() => handleSelectAwardClick(award)}
              />
            ))
          : EMPTY_FIELD_STRING}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  title: {
    color: "blue",
  },
};
