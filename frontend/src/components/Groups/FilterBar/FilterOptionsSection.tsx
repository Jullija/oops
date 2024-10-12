import { useState } from "react";
import { Styles } from "../../../utils/Styles";

export type FilterItem = {
  id: string;
  name: string;
};

export type FilterOptionsSectionProps = {
  pickerTitle: string;
  options: FilterItem[];
  onFiltersChange: (selectedIds: string[]) => void;
};

export const FilterOptionsSection = ({
  pickerTitle,
  options,
  onFiltersChange,
}: FilterOptionsSectionProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleOptionClick = (optionId: string) => {
    const updatedIds = selectedIds.includes(optionId)
      ? selectedIds.filter((id) => id !== optionId)
      : [...selectedIds, optionId];

    setSelectedIds(updatedIds);
    onFiltersChange(updatedIds);
  };

  return (
    <div style={styles.card}>
      <div style={styles.title}>{pickerTitle}</div>
      {options.map((option) => (
        <div
          key={option.id}
          style={styles.optionContainer}
          onClick={() => handleOptionClick(option.id)}
        >
          <div
            style={{
              ...styles.radio,
              ...(selectedIds.includes(option.id) ? styles.active : undefined),
            }}
          />
          <div>{option.name}</div>
        </div>
      ))}
    </div>
  );
};

const styles: Styles = {
  card: {
    padding: 20,
    gap: 12,
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
  optionContainer: {
    padding: 4,
    gap: 4,
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
  },
  radio: {
    width: 16,
    height: 16,
    border: "1px solid black",
  },
  active: {
    backgroundColor: "black",
  },
};
