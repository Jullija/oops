import { Styles } from "../../../utils/Styles";
import FilterMenu, { FilterItem } from "./FilterMenu";
import { useState } from "react";
import PointsTable from "./PointsTable";
import { Points } from "../../../hooks/StudentProfile/useStudentData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

type PointsTableProps = {
  points: Points[];
  filterHeaderNames: FilterItem[];
};

export const PointsTableWithFilter = ({
  points,
  filterHeaderNames,
}: PointsTableProps) => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const onSelectChange = (updatedSelectedCategoryIds: string[]) => {
    setSelectedCategoryIds(updatedSelectedCategoryIds);
  };

  const isInSelectedCategoryIds = (points: Points) => {
    return selectedCategoryIds.some(
      (selectedId) => selectedId === points?.subcategory.category.categoryId,
    );
  };

  const getFilteredItems = () => {
    return selectedCategoryIds.length === 0
      ? points
      : points.filter(isInSelectedCategoryIds);
  };

  return (
    <div style={styles.container}>
      <FilterMenu
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={onSelectChange}
        filterItems={filterHeaderNames}
      />
      <PointsTable points={getFilteredItems()} />
    </div>
  );
};
