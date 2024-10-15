import { EMPTY_FIELD_STRING } from "../../../../../utils/constants";
import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";
import { CategoryCard } from "./CategoryCard";

type CategoriesListProps = {
  categories: Category[];
  selectedCategories: Category[];
  handleSelectCategoryClick: (category: Category) => void;
  title: string;
};

export const CategoriesList = ({
  categories,
  selectedCategories,
  handleSelectCategoryClick,
  title,
}: CategoriesListProps) => {
  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.container}>
        {categories.length !== 0
          ? categories.map((category) => (
              <CategoryCard
                category={category}
                isSelected={
                  !!selectedCategories.find(
                    (c) => c.categoryId === category.categoryId,
                  )
                }
                onSelectClick={() => handleSelectCategoryClick(category)}
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
    gap: 12,
  },
  title: {
    color: "blue",
  },
};
