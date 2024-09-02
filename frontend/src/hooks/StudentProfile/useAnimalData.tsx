import { LevelType } from "../../__generated__/schema.graphql.types";
import { useNeighboringLevelsQuery } from "../../graphql/neighbouringLevels.graphql.types";

export type Level = {
  name: string;
  minimalPoints: number;
  maximumPoints: number;
  ordinalNumber: number;
};

const mapToLevel = (level: LevelType | null | undefined): Level | undefined => {
  if (!level) {
    return undefined;
  }
  return {
    name: level.levelName,
    minimalPoints: level.minimumPoints,
    maximumPoints: level.maximumPoints,
    ordinalNumber: level.ordinalNumber,
  };
};

export const useAnimalData = (editionId?: string, studentId?: string) => {
  const { data, loading, error, refetch } = useNeighboringLevelsQuery({
    skip: !editionId || !studentId,
    variables: {
      editionId: parseInt(editionId ?? "-1"),
      studentId: parseInt(studentId ?? "-1"),
    },
  });

  const previousLevel = mapToLevel(data?.getNeighbouringLevels.previousLevel);
  const currLevel = mapToLevel(data?.getNeighbouringLevels.currentLevel);
  const nextLevel = mapToLevel(data?.getNeighbouringLevels.nextLevel);

  if (!currLevel) {
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
    prevLevel: previousLevel,
    currLevel,
    nextLevel,
    loading,
    error,
    refetch,
  };
};
