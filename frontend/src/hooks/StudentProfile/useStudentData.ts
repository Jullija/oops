import { useUserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { UserPoints } from "../../utils/types";
import { useUserEditions } from "../common/useUserEditions";

export type StudentData = {
  id: string;
  fullName: string;
  index: number;
  points: UserPoints;
};

type UseUserDataResult = {
  student?: StudentData;
  loading: boolean;
  error?: Error;
  refetch?: () => void;
};
export function useStudentData(studentId: string): UseUserDataResult {
  const { selectedEdition: edition } = useUserEditions();

  const { data, loading, error, refetch } = useUserPointsQuery({
    skip: !edition,
    variables: { id: studentId, editionId: edition?.editionId ?? "-1" },
  });

  if (loading || error || !data?.usersByPk) {
    return {
      loading,
      error: error,
    };
  }

  const { userId, fullName, indexNumber, points } = data.usersByPk;

  return {
    student: {
      id: userId,
      fullName: fullName ?? "",
      index: indexNumber,
      points: points,
    },
    loading,
    error,
    refetch,
  };
}
