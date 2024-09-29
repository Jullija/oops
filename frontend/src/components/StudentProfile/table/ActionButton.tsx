import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Styles } from "../../../utils/Styles";

type ActionButtonProps = {
  type: "edit" | "delete";
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

    let typeStyles;
    switch (type) {
      case "edit":
        typeStyles = styles.edit;
        break;
      case "delete":
        typeStyles = styles.delete;
        break;
    }

    return { ...styles.button, ...typeStyles };
  };

  switch (type) {
    case "edit":
      return (
        <ModeEditRoundedIcon onClick={handleClick} style={getButtonStyles()} />
      );
    case "delete":
      return (
        <DeleteRoundedIcon onClick={handleClick} style={getButtonStyles()} />
      );
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
  edit: {
    backgroundColor: "lightgreen",
  },
  delete: {
    backgroundColor: "red",
  },
};
