import { useEditionSelection } from "../common/useEditionSelection";
import { useCategoriesCardData } from "./useCategoriesCardData";
import { useStudentData } from "./useStudentData";

export const useStudentProfileData = (studentId: string) => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId ?? "-1";

  const { categories, categoriesLoading, categoriesError, categoriesRefetch } =
    useCategoriesCardData({
      editionId,
      studentId,
    });
  const {
    studentData,
    points,
    filterHeaderNames,
    studentPointsLoading,
    studentPointsError,
    studentPointsRefetch,
  } = useStudentData({ editionId, studentId });

  const refetch = () => {
    categoriesRefetch();
    studentPointsRefetch();
  };

  return {
    categories,
    studentData,
    points,
    filterHeaderNames,
    // TODO loading and error probably should be separated to sidebar and table
    loading: categoriesLoading || studentPointsLoading,
    error: categoriesError || studentPointsError,
    refetch,
  };
};
