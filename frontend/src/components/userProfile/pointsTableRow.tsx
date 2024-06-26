import { Styles } from "../../utils";
import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";

const styles: Styles = {
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
};

function PointsTableRow({
  point,
}: {
  point: NonNullable<UserPointsQuery["usersByPk"]>["points"][number];
}) {
  return (
    <tr key={point.pointsId}>
      <td style={styles.td}>{point.createdAt}</td>
      <td style={styles.td}>{point.label}</td>
      <td style={styles.td}>
        {point.userByTeacherId?.firstName} {point.userByTeacherId?.secondName}
      </td>
      <td style={styles.td}>{point.subcategory.subcategoryName}</td>
      <td style={styles.td}>{point.subcategory.category.categoryName}</td>
      <td style={styles.td}>
        {point.bonuses.map((bonus) => (
          <div key={bonus.bonusId}>
            {bonus.award.awardName} ({bonus.award.awardType})
          </div>
        ))}
      </td>
    </tr>
  );
}

export default PointsTableRow;
