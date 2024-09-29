import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { PointsForm } from "../../components/StudentProfile/PointsForm/PointsForm";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useFormCategories } from "../../hooks/common/useFormCategories";
import { Dialog } from "@mui/material";
import { StudentTableWithFilters } from "../../components/StudentProfile/table/StudentTableWithFilters";
import { Button } from "../../components/Button";
import { useTeacherActions } from "../../hooks/StudentProfile/useTeacherActions";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { Roles } from "../../router/paths";
import { isEditionActive } from "../../utils/utils";

export function TeacherStudentProfile() {
  const params = useParams();
  const studentId = params.id;
  const { user } = useUser();
  const userId = user.userId;

  const { selectedEdition } = useEditionSelection();

  const {
    categories,
    studentData,
    points,
    prevLevel,
    currLevel,
    nextLevel,
    filterHeaderNames,
    loading,
    error,
    refetch,
  } = useStudentProfileData(studentId);

  const {
    categories: formCategories,
    loading: formDataLoading,
    error: formDataError,
  } = useFormCategories();

  const {
    isAddDialogOpen,
    openAddDialog,
    closeAddDialog,
    isEditDialogOpen,
    openEditDialog,
    closeEditDialog,
    pointsToEdit,
    handleAddPointsConfirmation,
    addPointsError,
    handleEditPointsConfirmation,
    editPointsError,
    handleDeletePointsClick,
  } = useTeacherActions(refetch, studentId as string, userId);

  if (!studentId) return <p>StudentId is undefined</p>;
  if (!userId) return <p>TeacherId is undefined</p>;

  if (loading || formDataLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (formDataError) return <p>Error: {formDataError.message}</p>;

  if (!studentData) return <p>Student is undefined</p>;
  if (!currLevel) return <p>Curr level is undefined</p>;

  const hasEditableRights =
    studentData.group?.teacherId === userId || user.role === Roles.COORDINATOR;

  const isSelectedEditionActive =
    selectedEdition && isEditionActive(selectedEdition);

  const disableEditMode = !(isSelectedEditionActive && hasEditableRights);

  return (
    <div style={styles.container}>
      <SideBar
        student={studentData}
        categoriesBarProps={categories}
        currLevel={currLevel}
        prevLevel={prevLevel}
        nextLevel={nextLevel}
      />
      <div style={styles.rightContainer}>
        <Dialog open={isAddDialogOpen}>
          <PointsForm
            categories={formCategories}
            handleConfirmClick={handleAddPointsConfirmation}
            mutationError={addPointsError?.message}
            variant="add"
          />
          <Button onClick={closeAddDialog} color="lightblue">
            close
          </Button>
        </Dialog>

        <Dialog open={isEditDialogOpen}>
          <PointsForm
            categories={formCategories}
            handleConfirmClick={handleEditPointsConfirmation}
            mutationError={editPointsError?.message}
            initialValues={{
              subcategoryId: pointsToEdit?.subcategory.subcategoryId as string,
              points: pointsToEdit?.points.purePoints?.value ?? 0,
              categoryId: pointsToEdit?.subcategory.category
                .categoryId as string,
            }}
            variant="edit"
          />
          <Button onClick={closeEditDialog} color="lightblue">
            close
          </Button>
        </Dialog>

        <Button
          onClick={openAddDialog}
          color="lightblue"
          disabled={disableEditMode}
        >
          add points
        </Button>

        <StudentTableWithFilters
          points={points}
          filterHeaderNames={filterHeaderNames}
          handleEditClick={openEditDialog}
          handleDeleteClick={handleDeletePointsClick}
          // TODO it should be discussed when buttons should be displayed
          showActionButtons={true}
          blockActionButtons={disableEditMode}
        />
      </div>
    </div>
  );
}

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    margin: 12,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
};
