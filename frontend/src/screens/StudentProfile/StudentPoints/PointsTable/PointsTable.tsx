import { Points, Styles } from "../../../../utils";

const styles: Styles = {
  table: {
    width: 600,
    border: "1px solid blue",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  cell: {
    border: "1px solid blue",
    padding: 12,
    display: "flex",
    justifyContent: "center",
    width: "30%",
  },
};

type PointsTableProps = {
  pointsList: Points[];
};

export const PointsTable = ({ pointsList }: PointsTableProps) => {
  const headers = ["category", "subcategory", "points", "provider"];

  return (
    <div style={styles.pointsTable}>
      <div style={styles.row}>
        {headers.map((header, index) => (
          <div key={index} style={styles.cell}>
            {header}
          </div>
        ))}
      </div>

      {pointsList.map((points, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.cell}>{points.category.name}</div>
          <div style={styles.cell}>{points.subcategory.name}</div>
          <div style={styles.cell}>{points.number}</div>
          <div style={styles.cell}>{points.provider.name}</div>
        </div>
      ))}
    </div>
  );
};
