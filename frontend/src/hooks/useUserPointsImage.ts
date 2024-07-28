import { useMemo } from "react";
import { useLevelsByEditionQuery } from "../graphql/levelsByEdition.graphql.types";
import { useEditionSelection } from "./common/useEditionSelection";

export const useUserPointsImage = (points: number) => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId as string;

  const { data, loading, error } = useLevelsByEditionQuery({
    variables: { editionId },
    skip: !selectedEdition,
  });

  const imageId = useMemo(() => {
    if (loading || error || !data?.editionByPk) {
      return null;
    }

    // TODO logic to find out which level is user
    const level = data.editionByPk.levels.find((level) => {
      if (
        level.highest &&
        points >=
          (level.maximumPoints
            ? +level.maximumPoints
            : Number.POSITIVE_INFINITY)
      ) {
        return true;
      }
      if (
        level.minimumPoints &&
        points >= +level.minimumPoints &&
        (level.maximumPoints ? points < +level.maximumPoints : true)
      ) {
        return true;
      }
      return false;
    });

    return level?.imageFileId || null;
  }, [data, points, loading, error]);

  return {
    imageId,
    loading,
    error,
  };
};
