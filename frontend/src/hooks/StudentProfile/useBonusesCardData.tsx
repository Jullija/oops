import { useBonusesQuery } from "../../graphql/bonuses.graphql.types";

export type Bonus = {
  award: {
    id: string;
    name: string;
    value: number;
    imgId: string | undefined;
  };
  // TODO convert to date?
  updatedAt: string;
  createdAt: string;
};

export const useBonusesCardData = (
  editionId: string | undefined,
  studentId: string | undefined,
) => {
  const { data, loading, error, refetch } = useBonusesQuery({
    variables: {
      editionId: editionId as string,
      studentId: studentId as string,
    },
    skip: !editionId || !studentId,
  });

  const bonuses: Bonus[] =
    data?.bonuses.map((bonus) => {
      return {
        award: {
          id: bonus.award.awardId,
          name: bonus.award.awardName,
          value: parseFloat(bonus.award.awardValue),
          imgId: bonus.award.imageFileId ?? undefined,
        },
        updatedAt: bonus.updatedAt,
        createdAt: bonus.createdAt,
      };
    }) ?? [];

  return {
    bonuses,
    bonusesLoading: loading,
    bonusesError: error,
    bonusesRefetch: refetch,
  };
};
