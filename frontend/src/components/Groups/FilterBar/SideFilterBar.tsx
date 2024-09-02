import { Styles } from "../../../utils/Styles";
import { OptionPicker, OptionPickerProps } from "./OptionPicker";

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
  sections: OptionPickerProps[];
};

export const SideFilterBar = ({ sections }: SideFilterBarProps) => {
  return (
    <div style={styles.container}>
      {sections.map((props) => (
        <OptionPicker {...props} />
      ))}
    </div>
  );
};
