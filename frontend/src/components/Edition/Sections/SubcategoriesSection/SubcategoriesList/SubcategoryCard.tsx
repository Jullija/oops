import { Subcategory } from "../../../../../hooks/Edition/useSubcategoriesSection";
import { Styles } from "../../../../../utils/Styles";

type CategoryCardProps = {
  subcategory: Subcategory;
  isSelected: boolean;
  onSelectClick: () => void;
};

export const SubcategoryCard = ({
  subcategory,
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
      <div>{subcategory.subcategoryName}</div>
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
