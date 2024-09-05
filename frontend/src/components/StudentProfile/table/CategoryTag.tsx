import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  container: {
    padding: 4,
    borderRadius: 4,
    display: "inline-block",
    color: "black",
  },
};

type Colors = {
  [key: string]: string;
};

// TODO eventually it should be fetched from backend
const colors: Colors = {
  "1": "lightgreen",
  "2": "lightyellow",
  "3": "pink",
  "4": "purple",
  "5": "oragne",
};

type CategoryTagProps = {
  id: string;
  name: string;
};

export const CategoryTag = ({ id, name }: CategoryTagProps) => {
  const backgroundColor = colors[id] || "grey";

  return <div style={{ ...styles.container, backgroundColor }}>{name}</div>;
};
