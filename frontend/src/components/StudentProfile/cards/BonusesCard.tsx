import { Bonus } from "../../../hooks/StudentProfile/useBonusesCardData";
import { Styles } from "../../../utils/Styles";

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
};

type BonusesCardProps = {
  bonuses: Bonus[];
};

export const BonusesCard = ({ bonuses }: BonusesCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>Bonuses</div>
      {bonuses.map((b) => (
        <div>
          {b.award.name} {b.createdAt}
        </div>
      ))}
    </div>
  );
};
