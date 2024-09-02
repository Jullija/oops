import { useState } from "react";
import { Styles } from "../../../utils/Styles";
import { FilterItem } from "../../../hooks/Groups/FilterBar/useTimestampsData";

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

type OptionPickerProps = {
  pickerTitle: string;
  options: FilterItem[];
  onFiltersChange: (selectedIds: string[]) => void;
};

export const OptionPicker = ({
  pickerTitle,
  options,
  onFiltersChange,
}: OptionPickerProps) => {
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
        <div key={option.id} style={styles.optionContainer}>
          <div
            style={{
              ...styles.radio,
              ...(selectedIds.includes(option.id) ? styles.active : undefined),
            }}
            onClick={() => handleOptionClick(option.id)}
          />
          <div>{option.name}</div>
        </div>
      ))}
    </div>
  );
};
