import { Styles } from "../../../utils/Styles";
import { FilterItem } from "../../Groups/FilterBar/FilterOptionsSection";

const styles: Styles = {
  container: {
    display: "flex",
    gap: "10px",
  },
  item: {
    border: "1px solid black",
    textAlign: "center",
    padding: 12,
    cursor: "pointer",
  },
  active: {
    backgroundColor: "lightblue",
  },
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
            ...(isSelected(item) ? styles.active : undefined),
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
