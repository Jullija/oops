import { ApolloError } from "@apollo/client";
import { LevelType } from "../../__generated__/schema.graphql.types";
import { useNeighboringLevelsQuery } from "../../graphql/neighbouringLevels.graphql.types";

export type AnimalDataResult = {
  prevLevel: LevelType | undefined;
  currLevel: LevelType | undefined;
  nextLevel: LevelType | undefined;
  animalDataLoading: boolean;
  animalDataError: ApolloError | Error | undefined;
  animalDataRefetch: () => void;
};

export const useAnimalData = (
  editionId?: string,
  studentId?: string,
): AnimalDataResult => {
  const { data, loading, error, refetch } = useNeighboringLevelsQuery({
    skip: !editionId || !studentId,
    variables: {
      editionId: parseInt(editionId ?? "-1"),
      studentId: parseInt(studentId ?? "-1"),
    },
  });

  const previousLevel = data?.getNeighbouringLevels.previousLevel ?? undefined;
  const currLevel = data?.getNeighbouringLevels.currentLevel ?? undefined;
  const nextLevel = data?.getNeighbouringLevels.nextLevel ?? undefined;

  if (!currLevel) {
    return {
      prevLevel: undefined,
      currLevel: undefined,
      nextLevel: undefined,
      animalDataLoading: loading,
      animalDataError: error ?? new Error("Animal card levels are missing."),
      animalDataRefetch: refetch,
    };
  }

  return {
    prevLevel: previousLevel,
    currLevel,
    nextLevel,
    animalDataLoading: loading,
    animalDataError: error,
    animalDataRefetch: refetch,
  };
};
