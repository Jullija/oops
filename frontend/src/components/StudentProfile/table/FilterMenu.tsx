import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  container: {
    display: "flex",
    flexWrap: "wrap", // Added to wrap items if they overflow
    gap: "10px", // Added gap between items
  },
  item: {
    border: "1px solid black",
    textAlign: "center",
    padding: 12,
    cursor: "pointer",
  },
};

export type FilterItem = {
  id: string;
  name: string;
};

type FilterMenuProps = {
  pickedCategoryIds: string[];
  onSelectChange: (pickedCategoryIds: string[]) => void;
  filterItems: FilterItem[];
};

export default function FilterMenu({
  pickedCategoryIds,
  onSelectChange,
  filterItems,
}: FilterMenuProps) {
  const isSelected = (item: FilterItem) => {
    return pickedCategoryIds.some((selectedId) => selectedId === item.id);
  };

  const handleCategoryClick = (item: FilterItem) => {
    if (isSelected(item)) {
      const updatedSelectedCategories = pickedCategoryIds.filter(
        (selectedId) => selectedId !== item.id,
      );
      onSelectChange(updatedSelectedCategories);
    } else {
      onSelectChange([...pickedCategoryIds, item.id]);
    }
  };

  return (
    <div style={styles.container}>
      {filterItems.map((item) => (
        <div
          style={{
            ...styles.item,
            backgroundColor: isSelected(item) ? "green" : undefined,
          }}
          key={item.id}
          onClick={() => handleCategoryClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
