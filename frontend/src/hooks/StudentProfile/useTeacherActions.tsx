import { useState } from "react";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import { useEditPointsMutation } from "../../graphql/editPoints.graphql.types";
import { useRemovePointsMutation } from "../../graphql/removePoints.graphql.types";
import { FormPoints } from "../../components/StudentProfile/PointsForm/types";
import { Points } from "./useStudentData";

export const useTeacherActions = (
  refetchStudentScreenData: () => void,
  studentId: string,
  teacherId: string,
) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const openAddDialog = () => setIsAddDialogOpen(true);
  const closeAddDialog = () => setIsAddDialogOpen(false);

  const [pointsToEdit, setPointsToEdit] = useState<Points | undefined>(
    undefined,
  );
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const openEditDialog = (points: Points) => {
    setPointsToEdit(points);
    setIsEditDialogOpen(true);
  };
  const closeEditDialog = () => setIsEditDialogOpen(false);

  const [createPoints, { error: createError }] = useCreatePointsMutation();
  const [editPoints, { error: editError }] = useEditPointsMutation();
  const [removePoints, { error: removeError }] = useRemovePointsMutation();

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

  const handleEditPointsConfirmation = async (formPoints: FormPoints) => {
    if (!pointsToEdit) {
      throw new Error("Points to edit are undefined.");
    }

    const pointsId = pointsToEdit?.points.purePoints?.pointsId;
    if (!pointsId) {
      // TODO use create here
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
    isAddDialogOpen,
    openAddDialog,
    closeAddDialog,
    isEditDialogOpen,
    openEditDialog,
    closeEditDialog,
    pointsToEdit,
    handleAddPointsConfirmation,
    addPointsError: createError,
    handleEditPointsConfirmation,
    editPointsError: editError,
    handleDeletePointsClick,
  };
};
