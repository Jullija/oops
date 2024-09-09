import { Styles } from "../../../utils/Styles";
import FilterMenu from "./FilterMenu";
import { useState } from "react";
import { GradeTable } from "./GradeTable";
import {
  GradeCategory,
  GradeRowData,
} from "../../../hooks/Group/useGroupScreenData";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

type PointsTableProps = {
  data: GradeRowData[];
  categories: GradeCategory[];
};

// TODO add horizontal scroll and vertical scroll inside
export const GradeTableWithFilter = ({
  data,
  categories,
}: PointsTableProps) => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const isInSelected = (s: GradeCategory) => {
    return selectedCategoryIds.some((categoryId) => categoryId === s.id);
  };

  const categoriesToDisplay =
    selectedCategoryIds.length === 0
      ? categories.map((c) => c.subcategories).flat()
      : categories
          .filter(isInSelected)
          .map((c) => c.subcategories)
          .flat();

  const dataToDisplay: GradeRowData[] = data.map((item) => {
    return selectedCategoryIds.length === 0
      ? item
      : {
          ...item,
          subcategories: item.subcategories.filter((a) =>
            selectedCategoryIds.some((d) => d === a.categoryId),
          ),
        };
  });

  return (
    <div style={styles.container}>
      <FilterMenu
        pickedCategoryIds={selectedCategoryIds}
        onSelectChange={(selectedIds) => {
          setSelectedCategoryIds(selectedIds);
        }}
        filterItems={categories.map((c) => {
          return { id: c.id, name: c.name };
        })}
      />
      <GradeTable
        data={dataToDisplay}
        subcategoriesHeaders={categoriesToDisplay}
      />
    </div>
  );
};
