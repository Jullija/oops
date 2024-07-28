import { PointsBar, PointsBarProps } from "../../PointsBar";
import { Styles } from "../../../utils/Styles";

type CategoriesCardProps = {
  entries: PointsBarProps[];
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

export const CategoriesCard = ({ entries }: CategoriesCardProps) => {
  return (
    <div style={styles.container}>
      {entries.map((entry, index) => (
        <PointsBar key={index} {...entry} showPoints={true} />
      ))}
    </div>
  );
};
