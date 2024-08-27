import { Weekday } from "../../../hooks/Groups/FilterBar/useFilterData";
import { Styles } from "../../../utils/Styles";
import { OptionPicker } from "./OptionPicker";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    minWidth: 300,
  },
  card: {
    padding: 20,
    gap: 12,
    border: "1px solid black",
  },
};

type SideFilterBarProps = {
  weekdays: Weekday[];
  onDaysFilterChange: (selectedIds: string[]) => void;
};

export const SideFilterBar = ({
  weekdays,
  onDaysFilterChange,
}: SideFilterBarProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <OptionPicker
          title="dzień tygodnia"
          options={weekdays.map((weekday) => {
            return { id: weekday.id, name: weekday.name };
          })}
          onFiltersChange={onDaysFilterChange}
        />
      </div>
    </div>
  );
};
