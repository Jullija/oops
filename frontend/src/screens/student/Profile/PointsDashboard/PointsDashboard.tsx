import { useState } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { PointsTable } from "./PointsTable";
import { Points } from "../../../../utils";

type PointDashboardProps = {
  pointsList: Points[];
};

export const PointsDashboard = ({ pointsList }: PointDashboardProps) => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const onSelectChange = (updatedSelectedCategoryIds: string[]) => {
    setSelectedCategoryIds(updatedSelectedCategoryIds);
  };

  const isInSelectedCategoryIds = (points: Points) => {
    return selectedCategoryIds.some(
      (selectedId) => selectedId === points.category.id
    );
  };

  const getFilteredItems = () => {
    return selectedCategoryIds.length === 0
      ? pointsList
      : pointsList.filter(isInSelectedCategoryIds);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <CategoryFilter
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={onSelectChange}
      />
      <PointsTable pointsList={getFilteredItems()} />
    </div>
  );
};
