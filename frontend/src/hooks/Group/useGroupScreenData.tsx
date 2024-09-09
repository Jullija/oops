import { useGroupPointsQuery } from "../../graphql/groupPoints.graphql.types";

export const useGroupScreenData = (groupId: number | undefined) => {
  const { data, loading, error } = useGroupPointsQuery({
    variables: { groupId: groupId as number },
    skip: !groupId,
  });

  console.log("DATA: ", data);

  const headers =
    data?.getUsersInGroupWithPoints[0]?.categoriesPoints[0].subcategoryPoints.map(
      (p) => p.subcategory.subcategoryName,
    ) ?? [];

  return { headers, data, loading, error };
};
