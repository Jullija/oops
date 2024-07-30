import { Styles } from "../../utils/Styles";

const styles: Styles = {
  button: {
    padding: 12,
    cursor: "pointer",
  },
};

type FilterButtonProps = {
  option: string;
  isActive: boolean;
  onClick: () => void;
};

export const FilterButton = ({
  option,
  isActive,
  onClick,
}: FilterButtonProps) => {
  return (
    <div
      style={{
        ...styles.button,
        backgroundColor: isActive ? "blue" : "white",
        color: isActive ? "white" : "blue",
      }}
      onClick={onClick}
    >
      {option}
    </div>
  );
};
