import { useEditionSelection } from "../common/useEditionSelection";
import { useAnimalData } from "./useAnimalData";
import { useCategoriesCardData } from "./useCategoriesCardData";
import { useStudentData } from "./useStudentData";

export const useStudentProfileData = (studentId?: string) => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

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
    animalDataLoading,
    animalDataError,
    animalDataRefetch,
  } = useAnimalData(editionId, studentId);

  const refetch = () => {
    categoriesRefetch();
    studentPointsRefetch();
    animalDataRefetch();
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
    loading: categoriesLoading || studentPointsLoading || animalDataLoading,
    error: categoriesError || studentPointsError || animalDataError,
    refetch,
  };
};
