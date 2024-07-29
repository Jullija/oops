import { Styles } from "../../../utils/Styles";
import { Points } from "../../../hooks/StudentProfile/useStudentData";

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
  points: Points[];
};

export default function PointsTable({ points }: PointsTableProps) {
  const headers = ["Kategoria", "Podkategoria", "Punkty", "Prowadzący"];

  // TODO should be done on backed
  // backend:
  // - separate request for student aggregate data
  // - why points is 0?
  // - should not return chest categories only - event
  // - results are wrong and inconsistent with progress bar
  const getPointsString = (points: Points) => {
    const pure = points.points.purePoints?.value ?? 0;
    let totalBonus = 0;
    points.points.partialBonusType.forEach(
      (bonus) => (totalBonus += bonus?.partialValue ?? 0),
    );
    return `${pure.toFixed(2)} + ${totalBonus.toFixed(2)} = ${(pure + totalBonus).toFixed(2)}`;
  };

  return (
    <div style={styles.table}>
      <div style={styles.row}>
        {headers.map((header, index) => (
          <div key={index} style={styles.cell}>
            {header}
          </div>
        ))}
      </div>

      {points.map((item, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.cell}>
            {item.subcategory.category.categoryName}
          </div>
          <div style={styles.cell}>{item.subcategory.subcategoryName}</div>
          <div style={styles.cell}>{getPointsString(item)}</div>
          {/* TODO add fullName to backend */}
          <div style={styles.cell}>
            {item.points.purePoints?.teacher.firstName}{" "}
            {item.points.purePoints?.teacher.secondName}
          </div>
        </div>
      ))}
    </div>
  );
}
