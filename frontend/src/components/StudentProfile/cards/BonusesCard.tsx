import { Bonus } from "../../../hooks/StudentProfile/useBonusesCardData";
import { Styles } from "../../../utils/Styles";
import { AwardWithTooltip } from "../../images/AwardWithTooltip";

const styles: Styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid blue",
    gap: 12,
    padding: 24,
  },
  title: {
    fontWeight: "bold",
  },
  bonusesContainer: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
};

type BonusesCardProps = {
  bonuses: Bonus[];
};

export const BonusesCard = ({ bonuses }: BonusesCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>Bonuses</div>
      <div style={styles.bonusesContainer}>
        {bonuses.map((bonus) => (
          <AwardWithTooltip key={bonus.award.id} bonus={bonus} />
        ))}
      </div>
    </div>
  );
};
