import { useState } from "react";
import { Points } from "../../../utils";
import { FilterMenu } from "./FilterMenu";
import { PointsTable } from "./PointsTable";

type StudentPointsProps = {
  pointsList: Points[];
};

export const StudentPoints = ({ pointsList }: StudentPointsProps) => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const onSelectChange = (updatedSelectedCategoryIds: string[]) => {
    setSelectedCategoryIds(updatedSelectedCategoryIds);
  };

  const isInSelectedCategoryIds = (points: Points) => {
    return selectedCategoryIds.some((selectedId) => selectedId === points.id);
  };

  const getFilteredItems = () => {
    return selectedCategoryIds.length === 0
      ? pointsList
      : pointsList.filter(isInSelectedCategoryIds);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <FilterMenu
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={onSelectChange}
      />
      <PointsTable pointsList={getFilteredItems()} />
    </div>
  );
};
