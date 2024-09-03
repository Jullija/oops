import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  cell: {
    border: "1px solid blue",
    padding: 12,
    display: "flex",
    justifyContent: "center",
    width: "30%",
  },
};

type CellProps = {
  children?: string | number;
};
export const Cell = ({ children }: CellProps) => {
  return <div style={styles.cell}>{children}</div>;
};
