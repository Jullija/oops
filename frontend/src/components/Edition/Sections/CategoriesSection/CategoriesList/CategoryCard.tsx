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
    const subcategoryNames = category.subcategories.map(
      (subcategory) => subcategory.subcategoryName,
    );
    const n = subcategoryNames.length;
    return `(${n}) ${subcategoryNames.splice(0, Math.min(2, n)).join(", ")}${n > 2 ? "..." : ""}`;
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
