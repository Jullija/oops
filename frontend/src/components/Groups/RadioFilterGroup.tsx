import { Styles } from "../../utils/Styles";

const styles: Styles = {
  button: {
    padding: 12,
    backgroundColor: "lightgrey",
  },
  active: {
    backgroundColor: "blue",
    color: "white",
  },
};

type RadioFilterGroupProps = {
  options: FilterItem[];
  onOptionChange: (option: FilterItem) => void;
  selectedOption: FilterItem;
};

export type FilterItem = {
  id: string;
  name: string;
};

export const RadioFilterGroups = ({
  options,
  onOptionChange,
  selectedOption,
}: RadioFilterGroupProps) => {
  return (
    <>
      {options.map((option) => (
        <div
          style={{
            ...styles.button,
            ...(option.id === selectedOption.id ? styles.active : undefined),
          }}
          key={option.id}
          onClick={() => onOptionChange(option)}
        >
          {option.name}
        </div>
      ))}
    </>
  );
};
