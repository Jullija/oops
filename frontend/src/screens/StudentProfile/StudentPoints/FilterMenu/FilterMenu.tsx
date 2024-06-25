import { getCategories } from "../../../../api";
import { Category, Styles } from "../../../../utils";

const styles: Styles = {
  container: {
    display: "flex",
  },
  item: {
    border: "1px solid black",
    textAlign: "center",
    padding: 12,
    cursor: "pointer",
  },
};

type FilterMenuProps = {
  pickedCategoryIds: string[];
  onSelectChange: (pickedCategoryIds: string[]) => void;
};

export const FilterMenu = ({
  pickedCategoryIds,
  onSelectChange,
}: FilterMenuProps) => {
  const categories = getCategories();

  const isSelected = (category: Category) => {
    return pickedCategoryIds.some((selectedId) => selectedId === category.id);
  };

  const handleCategoryClick = (category: Category) => {
    if (isSelected(category)) {
      const updatedSelectedCategories = pickedCategoryIds.filter(
        (selectedId) => selectedId !== category.id
      );
      onSelectChange(updatedSelectedCategories);
    } else {
      onSelectChange([...pickedCategoryIds, category.id]);
    }
  };
  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <div
          style={{
            ...styles.item,
            backgroundColor: isSelected(category) ? "green" : undefined,
          }}
          key={index}
          onClick={() => {
            handleCategoryClick(category);
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};
