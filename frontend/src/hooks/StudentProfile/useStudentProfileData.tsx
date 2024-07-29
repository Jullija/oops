import { useEditionSelection } from "../common/useEditionSelection";
import { useCategoriesCardData } from "./useCategoriesCardData";
import { useStudentCardData } from "./useStudentData";
import { useStudentPointsData } from "./useStudentPointsData";

export const useStudentProfileData = (studentId: string) => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId ?? "-1";

  const { categories, categoriesLoading, categoriesError, categoriesRefetch } =
    useCategoriesCardData({
      editionId,
      studentId,
    });
  const { student, studentLoading, studentError, studentRefetch } =
    useStudentCardData({
      editionId,
      studentId,
    });
  const {
    points,
    filterHeaderNames,
    studentPointsLoading,
    studentPointsError,
    studentPointsRefetch,
  } = useStudentPointsData({ editionId, studentId });

  const refetch = () => {
    studentRefetch();
    categoriesRefetch();
    studentPointsRefetch();
  };

  return {
    categories,
    student,
    points,
    filterHeaderNames,
    // TODO loading and error probably should be separated to sidebar and table
    loading: categoriesLoading || studentLoading || studentPointsLoading,
    error: categoriesError || studentError || studentPointsError,
    refetch,
  };
};
