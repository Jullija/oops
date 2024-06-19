import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";

type UserCardProps = {
  user: NonNullable<UserPointsQuery["usersByPk"]>;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>
        {user.firstName} {user.secondName} ({user.nick})
      </h2>
      <p>Index Number: {user.indexNumber}</p>
    </div>
  );
}
