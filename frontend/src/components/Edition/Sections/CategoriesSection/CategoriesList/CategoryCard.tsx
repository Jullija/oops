import { Styles } from "../../../../../utils/Styles";
import { Category } from "../CategoriesSection";

type CategoryCardProps = {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
};

export const CategoryCard = ({
  category,
  isSelected,
  onClick,
}: CategoryCardProps) => {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "pink" : undefined,
      }}
      onClick={onClick}
    >
      {category.categoryName}
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
