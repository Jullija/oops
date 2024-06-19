import React, { useEffect } from "react";
import { useUserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { useUser } from "../../contexts/userContext";
import { UserCard } from "../../components/userProfile/userCard";
import { PointsTable } from "../../components/userProfile/pointsTable";

export function StudentProfile() {
  const { user, edition } = useUser();
  const editionId = edition ? edition.editionId : "0";
  const { data, loading, error, refetch } = useUserPointsQuery({
    skip: !edition,
    variables: { id: user.userId, editionId },
  });

  useEffect(() => {
    if (edition) {
      refetch({ id: user.userId, editionId: edition.editionId });
    }
  }, [edition, refetch, user.userId]);

  if (!edition) {
    return <p>Please select an edition.</p>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const points = data?.usersByPk?.points ?? [];

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      {data?.usersByPk && <UserCard user={data.usersByPk} />}
      <PointsTable points={points} />
    </div>
  );
}
