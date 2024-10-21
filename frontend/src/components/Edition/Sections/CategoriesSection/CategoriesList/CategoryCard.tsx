import { Category } from "../../../../../hooks/Edition/useCategoriesSection";
import { Styles } from "../../../../../utils/Styles";

type CategoryCardProps = {
  category: Category;
  isSelected: boolean;
  onSelectClick: () => void;
};

export const CategoryCard = ({
  category,
  isSelected,
  onSelectClick,
}: CategoryCardProps) => {
  const getSubcategoriesString = (category: Category) => {
    return category.subcategories
      .map((subcategory) => subcategory.subcategoryName)
      .join(", ");
  };
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "pink" : undefined,
      }}
    >
      <div>{category.categoryName}</div>
      <button onClick={onSelectClick}>
        {isSelected ? "unselect" : "select"}
      </button>
      <div>subcategories: {getSubcategoriesString(category)}</div>
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
