import { UserPoints } from "../../../utils/types";
import { Styles } from "../../../utils/Styles";
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import PointsTable from "./PointsTable";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

export default function PointsTableWithFilter({
  pointsList,
}: {
  pointsList: UserPoints;
}) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const onSelectChange = (updatedSelectedCategoryIds: string[]) => {
    setSelectedCategoryIds(updatedSelectedCategoryIds);
  };

  const isInSelectedCategoryIds = (point: UserPoints[number]) => {
    return selectedCategoryIds.some(
      (selectedId) => selectedId === point.subcategory.category.categoryId,
    );
  };

  const getFilteredItems = () => {
    return selectedCategoryIds.length === 0
      ? pointsList
      : pointsList.filter(isInSelectedCategoryIds);
  };

  return (
    <div style={styles.container}>
      <FilterMenu
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={onSelectChange}
        points={pointsList}
      />
      <PointsTable pointsList={getFilteredItems()} />
    </div>
  );
}
