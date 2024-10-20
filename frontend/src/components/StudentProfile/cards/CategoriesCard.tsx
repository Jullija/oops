import { ProgressBar, ProgressBarProps } from "../../bars/ProgressBar";
import { Styles } from "../../../utils/Styles";

type CategoriesCardProps = {
  categoriesBarProps: ProgressBarProps[];
};

export const CategoriesCard = ({ categoriesBarProps }: CategoriesCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>Punkty</div>
      {categoriesBarProps.map((props, index) => (
        <ProgressBar key={index} {...props} showPoints />
      ))}
    </div>
  );
};

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
