import { UserPoints } from "../../utils/types";
import { Styles } from "../../utils/Styles";
import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";

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

type Category = NonNullable<
  UserPointsQuery["usersByPk"]
>["points"][number]["subcategory"]["category"];

type FilterMenuProps = {
  pickedCategoryIds: string[];
  onSelectChange: (pickedCategoryIds: string[]) => void;
  points: UserPoints;
};

export default function FilterMenu({
  pickedCategoryIds,
  onSelectChange,
  points,
}: FilterMenuProps) {
  const categoryMap = new Map<string, Category>();
  points.forEach((point) => {
    categoryMap.set(
      point.subcategory.category.categoryId,
      point.subcategory.category,
    );
  });

  const categories = Array.from(categoryMap.values()).sort((a, b) =>
    a.categoryName.localeCompare(b.categoryName),
  );

  const isSelected = (category: Category) => {
    return pickedCategoryIds.some(
      (selectedId) => selectedId === category.categoryId,
    );
  };

  const handleCategoryClick = (category: Category) => {
    if (isSelected(category)) {
      const updatedSelectedCategories = pickedCategoryIds.filter(
        (selectedId) => selectedId !== category.categoryId,
      );
      onSelectChange(updatedSelectedCategories);
    } else {
      onSelectChange([...pickedCategoryIds, category.categoryId]);
    }
  };

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <div
          style={{
            ...styles.item,
            backgroundColor: isSelected(category) ? "green" : undefined,
          }}
          key={category.categoryId}
          onClick={() => handleCategoryClick(category)}
        >
          {category.categoryName}
        </div>
      ))}
    </div>
  );
}
