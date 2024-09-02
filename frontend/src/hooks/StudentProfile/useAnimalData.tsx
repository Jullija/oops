import { ApolloError } from "@apollo/client";
import { LevelType } from "../../__generated__/schema.graphql.types";
import { useNeighboringLevelsQuery } from "../../graphql/neighbouringLevels.graphql.types";

export type Level = {
  name: string;
  minimumPoints: number;
  maximumPoints: number;
  ordinalNumber: number;
  imageId: string | undefined;
};

const mapToLevel = (level: LevelType | null | undefined): Level | undefined => {
  if (!level) {
    return undefined;
  }
  return {
    name: level.levelName,
    minimumPoints: level.minimumPoints,
    maximumPoints: level.maximumPoints,
    ordinalNumber: level.ordinalNumber,
    imageId: level.imageFile?.fileId,
  };
};

export type AnimalDataResult = {
  prevLevel: Level | undefined;
  currLevel: Level | undefined;
  nextLevel: Level | undefined;
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

  const previousLevel = mapToLevel(data?.getNeighbouringLevels.previousLevel);
  const currLevel = mapToLevel(data?.getNeighbouringLevels.currentLevel);
  const nextLevel = mapToLevel(data?.getNeighbouringLevels.nextLevel);

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
