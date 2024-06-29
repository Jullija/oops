import { Styles, UserPoints } from "../../utils";

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

export default function PointsTable({
  pointsList,
}: {
  pointsList: UserPoints;
}) {
  const headers = ["Kategoria", "Podkategoria", "Punkty", "Prowadzący"];

  return (
    <div style={styles.table}>
      <div style={styles.row}>
        {headers.map((header, index) => (
          <div key={index} style={styles.cell}>
            {header}
          </div>
        ))}
      </div>

      {pointsList.map((points, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.cell}>
            {points.subcategory.category.categoryName}
          </div>
          <div style={styles.cell}>{points.subcategory.subcategoryName}</div>
          <div style={styles.cell}>{points.value}</div>
          <div style={styles.cell}>{points.userByTeacherId?.fullName}</div>
        </div>
      ))}
    </div>
  );
}
