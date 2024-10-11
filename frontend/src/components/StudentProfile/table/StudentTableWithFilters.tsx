import { Styles } from "../../../utils/Styles";
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import { Points } from "../../../hooks/StudentProfile";
import { FilterItem } from "../../Groups/FilterBar/FilterOptionsSection";
import { EditFunctions, StudentTable } from "./StudentTable";

type StudentTableWithFiltersProps = {
  points: Points[];
  filterHeaderNames: FilterItem[];
  editFunctions?: EditFunctions;
  showActionButtons?: boolean;
  blockActionButtons?: boolean;
};

export const StudentTableWithFilters = ({
  points,
  filterHeaderNames,
  editFunctions,
  showActionButtons = false,
  blockActionButtons = true,
}: StudentTableWithFiltersProps) => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const isInSelectedCategoryIds = (points: Points) => {
    return selectedCategoryIds.some(
      (selectedId) => selectedId === points.subcategory.category.categoryId,
    );
  };

  const pointsToDisplay =
    selectedCategoryIds.length === 0
      ? points
      : points.filter(isInSelectedCategoryIds);

  return (
    <div style={styles.container}>
      <FilterMenu
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={(selectedIds) => {
          setSelectedCategoryIds(selectedIds);
        }}
        filterItems={filterHeaderNames}
      />
      <StudentTable
        points={pointsToDisplay}
        editFunctions={editFunctions}
        showActionButtons={showActionButtons}
        blockActionButtons={blockActionButtons}
      />
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    flex: 1,
  },
};
