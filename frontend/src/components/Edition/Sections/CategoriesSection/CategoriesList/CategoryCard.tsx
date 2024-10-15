import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";

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
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
