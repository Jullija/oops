import { ApolloError } from "@apollo/client";
import { useUserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { UserPoints } from "../../utils/types";

type UseStudentCardDataResult = {
  student?: StudentData;
  studentLoading: boolean;
  studentError?: ApolloError;
  studentRefetch: () => void;
};

export type StudentData = {
  id: string;
  fullName: string;
  index: number;
  points: UserPoints;
};

export function useStudentCardData(props: {
  editionId: string;
  studentId: string;
}): UseStudentCardDataResult {
  const { editionId, studentId } = props;

  const {
    data,
    loading: studentLoading,
    error: studentError,
    refetch: studentRefetch,
  } = useUserPointsQuery({
    variables: { id: studentId, editionId },
  });

  if (!data?.usersByPk) {
    return {
      student: undefined,
      studentLoading,
      studentError,
      studentRefetch,
    };
  }

  const student: StudentData = {
    id: studentId,
    fullName: data.usersByPk?.fullName ?? "-",
    index: data.usersByPk?.indexNumber ?? -1,
    points: data.usersByPk?.points ?? [],
  };

  return {
    student: !data ? undefined : student,
    studentLoading,
    studentError,
    studentRefetch,
  };
}
