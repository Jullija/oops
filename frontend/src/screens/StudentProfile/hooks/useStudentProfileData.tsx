import { useEditionSelection } from "../../../hooks/common/useEditionSelection";
import { useCategoriesCardData } from "./useCategoriesCardData";
import { useStudentCardData } from "./useStudentData";

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

  const refetch = () => {
    studentRefetch();
    categoriesRefetch();
  };

  return {
    categories,
    student,
    loading: categoriesLoading || studentLoading,
    error: categoriesError || studentError,
    refetch,
  };
};
