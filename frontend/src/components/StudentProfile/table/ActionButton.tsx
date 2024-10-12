import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Styles } from "../../../utils/Styles";

type ActionButtonProps = {
  type: "edit" | "delete" | "add";
  isDisabled?: boolean;
  onClick?: () => void;
};

export const ActionButton = ({
  type,
  isDisabled,
  onClick,
}: ActionButtonProps) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick?.();
    }
  };

  const getButtonStyles = () => {
    if (isDisabled) {
      return {
        ...styles.button,
        ...styles.disabled,
      };
    }

    return {
      ...styles.button,
      ...(type === "delete" ? styles.red : styles.green),
    };
  };

  const buttonStyles = getButtonStyles();

  switch (type) {
    case "edit":
      return <ModeEditRoundedIcon onClick={handleClick} style={buttonStyles} />;
    case "delete":
      return <DeleteRoundedIcon onClick={handleClick} style={buttonStyles} />;
    case "add":
      return <AddRoundedIcon onClick={handleClick} style={buttonStyles} />;
  }
};

const styles: Styles = {
  button: {
    color: "black",
    padding: 2,
    cursor: "pointer",
  },
  disabled: {
    backgroundColor: "grey",
    cursor: "auto",
  },
  green: {
    backgroundColor: "lightgreen",
  },
  red: {
    backgroundColor: "red",
  },
};
