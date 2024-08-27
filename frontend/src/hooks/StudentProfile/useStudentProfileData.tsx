import { useEditionSelection } from "../common/useEditionSelection";
import { useAnimalData } from "./useAnimalData";
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

  const {
    prevLevel,
    currLevel,
    nextLevel,
    loading: animalLoading,
    error: animalError,
    refetch: animalRefetch,
  } = useAnimalData(
    editionId,
    studentData?.level.ordinalNumber,
    studentData?.level.highest,
  );

  const refetch = () => {
    categoriesRefetch();
    studentPointsRefetch();
    animalRefetch();
  };

  return {
    categories,
    studentData,
    points,
    filterHeaderNames,
    prevLevel,
    currLevel,
    nextLevel,
    // TODO loading and error probably should be separated to sidebar and table
    loading: categoriesLoading || studentPointsLoading || animalLoading,
    error: categoriesError || studentPointsError || animalError,
    refetch,
  };
};
