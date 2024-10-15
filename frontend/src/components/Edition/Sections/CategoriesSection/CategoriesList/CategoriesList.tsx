import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";
import { CategoryCard } from "./CategoryCard";

type CategoriesListProps = {
  categories: Category[];
  selectedCategories: Category[];
  handleCategoryClick: (category: Category) => void;
};

export const CategoriesList = ({
  categories,
  selectedCategories,
  handleCategoryClick,
}: CategoriesListProps) => {
  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          category={category}
          isSelected={
            !!selectedCategories.find(
              (c) => c.categoryId === category.categoryId,
            )
          }
          onClick={() => handleCategoryClick(category)}
        />
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
