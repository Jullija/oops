import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return <div style={styles.card}>{category.categoryName}</div>;
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
