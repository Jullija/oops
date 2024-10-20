import { Styles } from "../../../utils/Styles";
import {
  FilterOptionsSection,
  FilterOptionsSectionProps,
} from "./FilterOptionsSection";

type SideFilterBarProps = {
  sections: FilterOptionsSectionProps[];
};

export const SideFilterBar = ({ sections }: SideFilterBarProps) => {
  return (
    <div style={styles.container}>
      {sections.map((props) => (
        <FilterOptionsSection {...props} />
      ))}
    </div>
  );
};

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
