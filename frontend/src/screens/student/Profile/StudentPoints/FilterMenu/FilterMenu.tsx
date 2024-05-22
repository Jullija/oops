import { getCategories } from "../../../../api";
import { Category } from "../../../../utils";

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
    <div style={{ display: "flex" }}>
      {categories.map((category, index) => (
        <div
          style={{
            border: "1px solid black",
            textAlign: "center",
            padding: 12,
            cursor: "pointer",
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
