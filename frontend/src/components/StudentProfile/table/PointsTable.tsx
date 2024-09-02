import { Styles } from "../../../utils/Styles";
import { Points } from "../../../hooks/StudentProfile/useStudentData";
import Cell from "./Cell";

const styles: Styles = {
  table: {
    width: 1000,
    border: "1px solid blue",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
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
          <Cell key={index}>{header}</Cell>
        ))}
      </div>
      {points.map((item, index) => (
        <div key={index} style={styles.row}>
          <Cell>{item.subcategory.subcategoryName}</Cell>
          <Cell>{item.subcategory.category.categoryName}</Cell>
          <Cell>{getPointsString(item)}</Cell>
          <Cell>{item.subcategory.maxPoints}</Cell>
          <Cell>
            {getDisplayDate(
              item.points.purePoints?.createdAt,
              item.points.purePoints?.updatedAt,
            )?.toLocaleDateString("pl-PL", dateOptions)}
          </Cell>
          {/* TODO add fullName to backend */}
          <Cell>
            {`${item.points.purePoints?.teacher.firstName} ${item.points.purePoints?.teacher.secondName}`}
          </Cell>
        </div>
      ))}
    </div>
  );
}
