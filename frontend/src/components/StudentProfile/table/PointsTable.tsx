import { Styles } from "../../../utils/Styles";
import { Points } from "../../../hooks/StudentProfile/useStudentData";

const styles: Styles = {
  table: {
    width: 1000,
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

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export default function PointsTable({ points }: PointsTableProps) {
  const headerTitles = [
    "nazwa",
    "kategoria",
    "punkty",
    "max punktów",
    "data",
    "prowadzący",
  ];

  // TODO should not return chest categories only - do not return event, it cannot give points only chests
  const getPointsString = (points: Points) => {
    const pure = points.points.purePoints?.value ?? 0;
    let totalBonus = 0;
    points.points.partialBonusType.forEach(
      (bonus) => (totalBonus += bonus?.partialValue ?? 0),
    );
    return `${pure} + ${totalBonus} = ${pure + totalBonus}`;
  };

  const getDisplayDate = (
    createdAt: string | undefined,
    updatedAt: string | undefined,
  ): Date | undefined => {
    if (updatedAt) {
      return new Date(updatedAt);
    }
    return createdAt ? new Date(createdAt) : undefined;
  };

  return (
    <div style={styles.table}>
      <div style={styles.row}>
        {headerTitles.map((header, index) => (
          <div key={index} style={styles.cell}>
            {header}
          </div>
        ))}
      </div>
      {points.map((item, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.cell}>{item.subcategory.subcategoryName}</div>
          <div style={styles.cell}>
            {item.subcategory.category.categoryName}
          </div>
          <div style={styles.cell}>{getPointsString(item)}</div>
          <div style={styles.cell}>{item.subcategory.maxPoints}</div>
          {/* TODO add fullName to backend */}
          <div style={styles.cell}>
            {getDisplayDate(
              item.points.purePoints?.createdAt,
              item.points.purePoints?.updatedAt,
            )?.toLocaleDateString("pl-PL", dateOptions)}
          </div>
          <div style={styles.cell}>
            {item.points.purePoints?.teacher.firstName}{" "}
            {item.points.purePoints?.teacher.secondName}
          </div>
        </div>
      ))}
    </div>
  );
}
