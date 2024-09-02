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

export type GroupRadioFilterItem =
  | {
      id: "all";
      name: "wszystkie";
    }
  | {
      id: "yours";
      name: "twoje";
    }
  | {
      id: "foreign";
      name: "obce";
    };

type RadioFilterGroupProps = {
  options: GroupRadioFilterItem[];
  onOptionChange: (option: GroupRadioFilterItem) => void;
  selectedOption: GroupRadioFilterItem;
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
