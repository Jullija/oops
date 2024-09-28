import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";
import { CategoryCard } from "./CategoryCard";

type CategoriesListProps = {
  categories: Category[];
};

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
};
