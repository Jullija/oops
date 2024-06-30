import { useUserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { UserPoints } from "../../utils";
import { useUserEditions } from "../common/useUserEditions";

type UserData = {
  fullName: string;
  index: number;
  points: UserPoints;
};

type UseUserDataResult = {
  userData?: UserData;
  loading: boolean;
  error?: Error;
};

export function useTeacherStudentData({
  studentId,
}: {
  studentId: string;
}): UseUserDataResult {
  const { selectedEdition: edition } = useUserEditions();

  const editionId = edition ? edition.editionId : "0";
  const { data, loading, error } = useUserPointsQuery({
    skip: !edition,
    variables: { id: studentId, editionId },
  });

  if (loading || error || !data?.usersByPk) {
    return {
      loading,
      error: error,
    };
  }

  const { fullName, indexNumber, points } = data.usersByPk;

  const userData = {
    fullName: fullName || "",
    index: indexNumber,
    points: points,
  };

  return {
    userData,
    loading,
    error,
  };
}
