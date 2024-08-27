import {
  NeighborLevelsQuery,
  useNeighborLevelsQuery,
} from "../../graphql/neighborLevels.graphql.types";

export type NeighborLevel = NonNullable<NeighborLevelsQuery["levels"]>[number];

export const useAnimalData = (
  editionId: string,
  levelOrdinalNumber?: number,
  highest?: boolean,
) => {
  console.log(" ORDINAL NUMBER: ", levelOrdinalNumber);
  console.log("HIGHEST: ", highest);

  const { data, loading, error, refetch } = useNeighborLevelsQuery({
    skip: editionId === "-1" || !levelOrdinalNumber || highest === undefined,
    variables: {
      editionId: editionId,
      levelIds: levelOrdinalNumber
        ? [levelOrdinalNumber - 1, levelOrdinalNumber, levelOrdinalNumber + 1]
        : [],
    },
  });

  const levels = data?.levels;

  if (!levels || !levelOrdinalNumber || highest === undefined) {
    console.log("RETURN 2: ", {
      prevLevel: undefined,
      currLevel: undefined,
      nextLevel: undefined,
      loading,
      error,
      refetch,
    });
    return {
      prevLevel: undefined,
      currLevel: undefined,
      nextLevel: undefined,
      loading,
      error,
      refetch,
    };
  }

  const prevLevelExists = levelOrdinalNumber > 0;
  const nextLevelExists = !highest;

  console.log("RETURN 2: ", {
    prevLevel: prevLevelExists ? levels[0] : undefined,
    currLevel: prevLevelExists ? levels[1] : levels[0],
    nextLevel: nextLevelExists ? levels[levels.length - 1] : undefined,
    loading,
    error,
    refetch,
  });

  return {
    prevLevel: prevLevelExists ? levels[0] : undefined,
    currLevel: prevLevelExists ? levels[1] : levels[0],
    nextLevel: nextLevelExists ? levels[levels.length - 1] : undefined,
    loading,
    error,
    refetch,
  };
};
