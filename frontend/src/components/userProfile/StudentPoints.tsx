import { Styles } from "../../utils";
import FilterMenu from "./FilterMenu";

import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { useState } from "react";
import PointsTable from "./PointsTable";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

export default function StudentPoints({
  pointsList,
}: {
  pointsList: NonNullable<UserPointsQuery["usersByPk"]>["points"];
}) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const onSelectChange = (updatedSelectedCategoryIds: string[]) => {
    setSelectedCategoryIds(updatedSelectedCategoryIds);
  };

  const isInSelectedCategoryIds = (
    points: NonNullable<UserPointsQuery["usersByPk"]>["points"][number],
  ) => {
    return selectedCategoryIds.some(
      (selectedId) => selectedId === points.subcategory.category.categoryId,
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
      />
      <PointsTable pointsList={getFilteredItems()} />
    </div>
  );
}
