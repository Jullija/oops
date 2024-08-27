import { Teacher } from "../../../hooks/Groups/FilterBar/useTeacherData";
import { Weekday } from "../../../hooks/Groups/FilterBar/useWeekdaysData";
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
  weekdays: Weekday[];
  teachers: Teacher[];
  onDaysFilterChange: (selectedIds: string[]) => void;
  onTeacherChange: (selectedIds: string[]) => void;
};

export const SideFilterBar = ({
  weekdays,
  teachers,
  onDaysFilterChange,
  onTeacherChange,
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
        title="prowadzący"
        options={teachers}
        onFiltersChange={onTeacherChange}
      />
    </div>
  );
};
