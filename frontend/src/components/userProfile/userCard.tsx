import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";

type UserCardProps = {
  fullName: string;
  index: number;
  points: NonNullable<UserPointsQuery["usersByPk"]>["points"];
};

export function UserCard({ fullName, index, points }: UserCardProps) {
  // this card will also contain a photo with the current level and points (probably)

  return (
    <div className="user-card">
      <h2>{fullName}</h2>
      <p>Index Number: {index}</p>
      <p>
        Total Points: {points.reduce((acc, point) => acc + +point.value, 0)}
      </p>
    </div>
  );
}
