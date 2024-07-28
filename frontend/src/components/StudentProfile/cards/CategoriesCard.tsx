import { PointsBar, PointsBarProps } from "../../PointsBar";
import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

type CategoriesCardProps = {
  categoriesBarProps: PointsBarProps[];
};

export const CategoriesCard = ({ categoriesBarProps }: CategoriesCardProps) => {
  return (
    <div style={styles.container}>
      {categoriesBarProps.map((props, index) => (
        <PointsBar key={index} {...props} showPoints />
      ))}
    </div>
  );
};
