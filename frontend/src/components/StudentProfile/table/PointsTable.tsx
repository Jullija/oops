import { Styles } from "../../../utils/Styles";
import { Points } from "../../../hooks/StudentProfile/useStudentData";
import { Cell } from "./Cell";

const styles: Styles = {
  table: {
    width: 1000,
    border: "1px solid blue",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    display: "flex",
    gap: 12,
  },
  button: {
    backgroundColor: "lightblue",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    paddingRight: 8,
    paddingLeft: 8,
  },
  delete: {
    backgroundColor: "red",
  },
};

type PointsTableProps = {
  points: Points[];
  buttonsProps?: PointsTableTeacherButtonsProps;
};

export type PointsTableTeacherButtonsProps = {
  handleDeleteClick: (points: Points) => void;
  handleEditClick: (points: Points) => void;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const headerTitles = [
  "nazwa",
  "kategoria",
  "punkty",
  "max punktów",
  "data",
  "prowadzący",
];

export default function PointsTable({
  points,
  buttonsProps: teacherVersionProps,
}: PointsTableProps) {
  const getPointsString = (points: Points) => {
    const pure = points.points.purePoints?.value ?? 0;
    let totalBonus = 0;
    points.points.partialBonusType.forEach(
      (bonus) => (totalBonus += bonus?.partialValue ?? 0),
    );
    return `${pure} + ${totalBonus} = ${pure + totalBonus}`;
  };

  const getDisplayDate = (points: Points): Date | undefined => {
    const createdAt = points.points.purePoints
      ? points.points.purePoints.createdAt
      : points.points.partialBonusType[0]?.bonuses.points.createdAt;

    const updatedAt = points.points.purePoints
      ? points.points.purePoints.updatedAt
      : points.points.partialBonusType[0]?.bonuses.points.updatedAt;

    if (updatedAt) {
      return new Date(updatedAt);
    }
    return createdAt ? new Date(createdAt) : undefined;
  };

  // TODO date and teacher to add to backend
  const getTeacherDisplayName = (points: Points) => {
    const firstName = points.points.purePoints
      ? points.points.purePoints?.teacher.firstName
      : points.points.partialBonusType[0]?.bonuses.points.teacher.firstName;
    const secondName = points.points.purePoints
      ? points.points.purePoints?.teacher.secondName
      : points.points.partialBonusType[0]?.bonuses.points.teacher.secondName;
    return `${firstName} ${secondName}`;
  };

  return (
    <div style={styles.table}>
      <div style={styles.row}>
        {teacherVersionProps && <Cell />}
        {headerTitles.map((header, index) => (
          <Cell key={index}>{header}</Cell>
        ))}
      </div>
      {points.map((item, index) => (
        <div key={index} style={styles.row}>
          {teacherVersionProps && (
            <Cell>
              <div style={styles.buttonsContainer}>
                <div
                  style={{ ...styles.button, ...styles.delete }}
                  onClick={() => teacherVersionProps.handleDeleteClick?.(item)}
                >
                  del
                </div>
                <div
                  style={{ ...styles.button }}
                  onClick={() => teacherVersionProps.handleEditClick?.(item)}
                >
                  edit
                </div>
              </div>
            </Cell>
          )}
          <Cell>{item.subcategory.subcategoryName}</Cell>
          <Cell>{item.subcategory.category.categoryName}</Cell>
          <Cell>{getPointsString(item)}</Cell>
          <Cell>{item.subcategory.maxPoints}</Cell>
          <Cell>
            {getDisplayDate(item)?.toLocaleDateString("pl-PL", dateOptions)}
          </Cell>
          <Cell>{getTeacherDisplayName(item)}</Cell>
        </div>
      ))}
    </div>
  );
}
