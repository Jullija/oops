import { useState } from "react";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import { useEditPointsMutation } from "../../graphql/editPoints.graphql.types";
import { useRemovePointsMutation } from "../../graphql/removePoints.graphql.types";
import { FormPoints } from "../../components/StudentProfile/PointsForm/types";
import { Points } from "./useStudentData";

// TODO: maybe this hook should be separated to 3: add, edit, delete
export const useTeacherActions = (
  refetchStudentScreenData: () => void,
  studentId: string,
  teacherId: string,
) => {
  const [createPoints, { error: createError, reset: createErrorReset }] =
    useCreatePointsMutation();
  const [editPoints, { error: editError, reset: editErrorReset }] =
    useEditPointsMutation();
  const [removePoints, { error: removeError }] = useRemovePointsMutation();

  const [selectedPoints, setSelectedPoints] = useState<Points | undefined>(
    undefined,
  );

  // add
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const openAddDialog = (points?: Points) => {
    if (points) {
      setSelectedPoints(points);
    }
    setIsAddDialogOpen(true);
  };
  const closeAddDialog = () => {
    setSelectedPoints(undefined);
    createErrorReset();
    setIsAddDialogOpen(false);
  };

  const handleAddPointsConfirmation = async (formPoints: FormPoints) => {
    await createPoints({
      variables: {
        studentId: parseInt(studentId),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(teacherId),
        value: formPoints.points,
      },
    });

    if (!createError) {
      closeAddDialog();
      refetchStudentScreenData();
    }
  };

  // edit
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const openEditDialog = (points: Points) => {
    setSelectedPoints(points);
    setIsEditDialogOpen(true);
  };
  const closeEditDialog = () => {
    setSelectedPoints(undefined);
    editErrorReset();
    setIsEditDialogOpen(false);
  };

  // delete
  const handleEditPointsConfirmation = async (formPoints: FormPoints) => {
    if (!selectedPoints) {
      throw new Error("Points to edit are undefined.");
    }

    const pointsId = selectedPoints?.points.purePoints?.pointsId;
    if (!pointsId) {
      throw new Error("Pure points are undefined - use create instead.");
    }

    await editPoints({
      variables: {
        pointsId: parseInt(pointsId),
        teacherId: parseInt(teacherId),
        value: formPoints.points,
      },
    });

    if (!editError) {
      closeEditDialog();
      refetchStudentScreenData();
    }
  };

  const handleDeletePointsClick = async (pointsId: string) => {
    await removePoints({ variables: { pointsId: parseInt(pointsId) } });

    if (!removeError) {
      refetchStudentScreenData();
    } else {
      // TODO display error alert
      throw new Error("Error: " + removeError.message);
    }
  };

  return {
    selectedPoints,

    isAddDialogOpen,
    openAddDialog,
    closeAddDialog,

    isEditDialogOpen,
    openEditDialog,
    closeEditDialog,

    handleAddPointsConfirmation,
    addPointsError: createError,

    handleEditPointsConfirmation,
    editPointsError: editError,

    handleDeletePointsClick,
  };
};
