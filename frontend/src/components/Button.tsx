import { Styles } from "../utils/Styles";

// TODO to correct

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
      return { ...styles.button, ...styles.disabled };
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
    cursor: "auto",
  },
};
