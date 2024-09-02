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

type SideFilterBarProps = {
  weekdays: FilterItem[];
  teachers: FilterItem[];
  timestamps: FilterItem[];
  onWeekdayFilterChange: (selectedIds: string[]) => void;
  onTeacherChange: (selectedIds: string[]) => void;
  onTimestampChange: (selectedIds: string[]) => void;
};

export const SideFilterBar = ({
  weekdays,
  teachers,
  timestamps,
  onWeekdayFilterChange: onDaysFilterChange,
  onTeacherChange,
  onTimestampChange: onLessonChange,
}: SideFilterBarProps) => {
  return (
    <div style={styles.container}>
      <OptionPicker
        title="dzień tygodnia"
        options={weekdays.map((weekday) => {
          return { id: weekday.id, name: weekday.name };
        })}
        onFiltersChange={onDaysFilterChange}
      />
      <OptionPicker
        title="godzina"
        options={timestamps.map((lesson) => {
          return { id: lesson.id, name: lesson.name };
        })}
        onFiltersChange={onLessonChange}
      />
      <OptionPicker
        title="prowadzący"
        options={teachers}
        onFiltersChange={onTeacherChange}
      />
    </div>
  );
};
