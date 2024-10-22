import { Award } from "../../../../../hooks/Edition/useAwardsSection";
import { Styles } from "../../../../../utils/Styles";

type AwardCardProps = {
  award: Award;
  isSelected: boolean;
  onSelectClick: () => void;
};

export const AwardCard = ({
  award,
  isSelected,
  onSelectClick,
}: AwardCardProps) => {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "pink" : undefined,
      }}
    >
      <div>{award.awardName}</div>
      <button onClick={onSelectClick}>
        {isSelected ? "unselect" : "select"}
      </button>
      <div>{award.awardType}</div>
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
