import { User } from "../../contexts/userContext";
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
  user: User;
  studentData?: UserData;
  loading: boolean;
  error?: Error;
};

export function useTeacherStudentData({
  studentId,
}: {
  studentId: string;
}): UseUserDataResult {
  const { selectedEdition: edition } = useUserEditions();
  const { user } = useUser();

  const editionId = edition ? edition.editionId : "0";
  const { data, loading, error } = useUserPointsQuery({
    skip: !edition || !studentId,
    variables: { id: studentId, editionId },
  });

  if (loading || error || !data?.usersByPk) {
    return {
      user,
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
    user,
    studentData: userData,
    loading,
    error,
  };
}
