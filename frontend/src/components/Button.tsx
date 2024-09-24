import { Styles } from "../utils/Styles";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  color: "pink" | "lightblue" | "lightgreen";
};

export const Button = ({ children, onClick, disabled, color }: ButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  const getButtonStyles = () => {
    if (disabled) {
      return { ...styles.button, backgroundColor: "grey" };
    }
    return { ...styles.button, backgroundColor: color };
  };

  return (
    <div onClick={handleClick} style={getButtonStyles()}>
      {children}
    </div>
  );
};

const styles: Styles = {
  button: {
    width: "fit-content",
    padding: 4,
    cursor: "pointer",
    border: "1px solid black",
    color: "black",
  },
  disabled: {
    backgroundColor: "grey",
  },
};
