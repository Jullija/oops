import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";

type PointsTableProps = {
  points: NonNullable<UserPointsQuery["usersByPk"]>["points"];
};

export function PointsTable({ points }: PointsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Label</th>
          <th>Teacher</th>
          <th>Subcategory</th>
          <th>Category</th>
          <th>Bonuses</th>
        </tr>
      </thead>
      <tbody>
        {points.map((point) => (
          <tr key={point.pointsId}>
            <td>{point.createdAt}</td>
            <td>{point.label}</td>
            <td>
              {point.userByTeacherId.firstName}{" "}
              {point.userByTeacherId?.secondName}
            </td>
            <td>{point.subcategory.subcategoryName}</td>
            <td>{point.subcategory.category.categoryName}</td>
            <td>
              {point.bonuses.map((bonus) => (
                <div key={bonus.bonusId}>
                  {bonus.award.awardName} ({bonus.award.awardType})
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
