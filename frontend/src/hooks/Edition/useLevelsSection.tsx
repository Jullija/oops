import {
  SetupLevelsQuery,
  useSetupLevelsQuery,
} from "../../graphql/setupLevels.graphql.types";

export type Level = SetupLevelsQuery["levels"][number];

export const useLevelsSection = (editionId: number) => {
  const { data, loading, error, refetch } = useSetupLevelsQuery();

  const levels: Level[] = data?.levels ?? [];

  console.log("LEVELSL ", data);

  const selectedLevels: Level[] = levels.filter(
    (l) => l.editionId === editionId.toString(),
  );
  return { levels, selectedLevels, loading, error, refetch };
};
