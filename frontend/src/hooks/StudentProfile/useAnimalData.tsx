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

  const prevLevel = data?.getNeighboringLevels.prevLevel ?? undefined;
  const currLevel = data?.getNeighboringLevels.currLevel ?? undefined;
  const nextLevel = data?.getNeighboringLevels.nextLevel ?? undefined;

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
    prevLevel,
    currLevel,
    nextLevel,
    animalDataLoading: loading,
    animalDataError: error,
    animalDataRefetch: refetch,
  };
};
