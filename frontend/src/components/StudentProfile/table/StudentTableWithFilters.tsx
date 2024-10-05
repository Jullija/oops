import { Styles } from "../../../utils/Styles";
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import { Points } from "../../../hooks/StudentProfile";
import { FilterItem } from "../../Groups/FilterBar/FilterOptionsSection";
import { StudentTable } from "./StudentTable";

type StudentTableWithFiltersProps = {
  points: Points[];
  filterHeaderNames: FilterItem[];
  handleEditClick?: (points: Points) => void;
  handleDeleteClick?: (pointsId: string) => void;
  showActionButtons?: boolean;
  blockActionButtons?: boolean;
};

export const StudentTableWithFilters = ({
  points,
  filterHeaderNames,
  handleEditClick,
  handleDeleteClick,
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
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
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
