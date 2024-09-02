import { useNeighboringLevelsQuery } from "../../graphql/neighbouringLevels.graphql.types";

export const useAnimalData = (editionId?: string, studentId?: string) => {
  const { data, loading, error, refetch } = useNeighboringLevelsQuery({
    skip: !editionId || !studentId,
    variables: {
      editionId: parseInt(editionId ?? "-1"),
      studentId: parseInt(studentId ?? "-1"),
    },
  });

  const previousLevel = data?.getNeighbouringLevels.previousLevel;
  const currLevel = data?.getNeighbouringLevels.currentLevel;
  const nextLevel = data?.getNeighbouringLevels.nextLevel;

  console.log("DATA: ", data);
  console.log("PREV: ", previousLevel);

  if (!loading && !currLevel) {
    return {
      prevLevel: undefined,
      currLevel: undefined,
      nextLevel: undefined,
      loading,
      error: error ?? new Error("Animal card levels are missing."),
      refetch,
    };
  }

  return {
    previousLevel,
    currLevel,
    nextLevel,
    loading,
    error,
    refetch,
  };
};
