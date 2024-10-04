import { ApolloError } from "@apollo/client";
import { LevelType } from "../../../__generated__/schema.graphql.types";
import { useNeighboringLevelsQuery } from "../../../graphql/neighbouringLevels.graphql.types";
import { Level } from "../types";

export type AnimalDataResult = {
  prevLevel: Level | undefined;
  currLevel: Level | undefined;
  nextLevel: Level | undefined;
  animalDataLoading: boolean;
  animalDataError: ApolloError | Error | undefined;
  animalDataRefetch: () => void;
};

const mapToLevel = (data: LevelType | undefined): Level | undefined => {
  if (!data) {
    return undefined;
  }
  return {
    name: data.levelName,
    ordinalNumber: data.ordinalNumber,
    imageId: data.imageFile?.fileId ?? undefined,
    // TODO should be int of float
    minimumPoints: parseInt(data.minimumPoints),
    maximumPoints: parseInt(data.maximumPoints),
  };
};

export const useAnimalData = (
  editionId: string | undefined,
  studentId: string | undefined,
): AnimalDataResult => {
  const { data, loading, error, refetch } = useNeighboringLevelsQuery({
    skip: !editionId || !studentId,
    variables: {
      editionId: parseInt(editionId as string),
      studentId: parseInt(studentId as string),
    },
  });

  const prevLevel = mapToLevel(
    data?.getNeighboringLevels.prevLevel ?? undefined,
  );
  const currLevel = mapToLevel(
    data?.getNeighboringLevels.currLevel ?? undefined,
  );
  const nextLevel = mapToLevel(
    data?.getNeighboringLevels.nextLevel ?? undefined,
  );

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
