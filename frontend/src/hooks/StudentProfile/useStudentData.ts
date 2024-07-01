import { useUserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { UserPoints } from "../../utils/types";
import { useUser } from "../common/useUser";
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
export function useStudentData(): UseUserDataResult {
  const { user } = useUser();
  const { selectedEdition: edition } = useUserEditions();

  const editionId = edition ? edition.editionId : "0";
  const { data, loading, error } = useUserPointsQuery({
    skip: !edition,
    variables: { id: user.userId, editionId },
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
