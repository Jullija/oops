import {
  UserPointsQuery,
  useUserPointsQuery,
} from "../graphql/userPoints.graphql.types";
import { useUser } from "./useUser";
import { useUserEditions } from "./useUserEditions";

type UserData = {
  fullName: string;
  index: number;
  points: NonNullable<UserPointsQuery["usersByPk"]>["points"];
};

type UseUserDataResult = {
  userData: UserData | null;
  loading: boolean;
  error: Error | null;
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
      userData: null,
      loading,
      error: error || null,
    };
  }

  const { firstName, secondName, indexNumber, points } = data.usersByPk;
  console.log(data.usersByPk);
  const userData = {
    fullName: `${firstName} ${secondName}`,
    index: indexNumber,
    points: points,
  };

  return {
    userData,
    loading,
    error: null,
  };
}
