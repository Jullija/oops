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
export default function PointsTable({ children }: CellProps) {
  return <div style={styles.cell}>{children}</div>;
}
