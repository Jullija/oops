import { FilterItem } from "../../../hooks/Groups/FilterBar/useTimestampsData";
import { Styles } from "../../../utils/Styles";
import { OptionPicker } from "./OptionPicker";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    minWidth: 300,
    borderRight: "1px solid blue",
    paddingRight: 12,
  },
};

// TODO could take a list of {data, () => void}
type SideFilterBarProps = {
  weekdays: FilterItem[];
  teachers: FilterItem[];
  timestamps: FilterItem[];
  onWeekdayChange: (selectedIds: string[]) => void;
  onTeacherChange: (selectedIds: string[]) => void;
  onTimestampChange: (selectedIds: string[]) => void;
};

export const SideFilterBar = ({
  weekdays,
  teachers,
  timestamps,
  onWeekdayChange,
  onTeacherChange,
  onTimestampChange,
}: SideFilterBarProps) => {
  return (
    <div style={styles.container}>
      <OptionPicker
        pickerTitle="dzień tygodnia"
        options={weekdays.map((weekday) => {
          return { id: weekday.id, name: weekday.name };
        })}
        onFiltersChange={onWeekdayChange}
      />
      <OptionPicker
        pickerTitle="godzina"
        options={timestamps.map((lesson) => {
          return { id: lesson.id, name: lesson.name };
        })}
        onFiltersChange={onTimestampChange}
      />
      <OptionPicker
        pickerTitle="prowadzący"
        options={teachers}
        onFiltersChange={onTeacherChange}
      />
    </div>
  );
};
