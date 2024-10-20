import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import {
  PointsForm,
  PointsFormValues,
} from "../../components/StudentProfile/PointsForm/PointsForm";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useFormCategories } from "../../hooks/common/useFormCategories";
import { Dialog } from "@mui/material";
import { StudentTableWithFilters } from "../../components/StudentProfile/table/StudentTableWithFilters";
import { Button } from "../../components/Button";
import { useTeacherActions } from "../../hooks/StudentProfile";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { Roles, RolesToUsersRolesTypeMap } from "../../utils/types";
import { isEditionActive } from "../../utils/utils";
import { NotEditableInfo } from "../../components/StudentProfile/NotEditableInfo";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
    bonuses,
    filterHeaderNames,
    loading,
    error,
    refetch,
  } = useStudentProfileData(studentId);

  const {
    formCategories,
    formInitialValues,
    loading: formDataLoading,
    error: formDataError,
  } = useFormCategories();

  const {
    selectedPoints,
    isAddDialogOpen,
    openAddDialog,
    closeAddDialog,
    isEditDialogOpen,
    openEditDialog,
    closeEditDialog,
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
    studentData.group?.teacherId === userId ||
    user.role === RolesToUsersRolesTypeMap[Roles.COORDINATOR];

  const isSelectedEditionActive = Boolean(
    selectedEdition && isEditionActive(selectedEdition),
  );

  const disableEditMode = !(isSelectedEditionActive && hasEditableRights);

  const initialValues: PointsFormValues = selectedPoints
    ? {
        categoryId: selectedPoints?.subcategory.category.categoryId,
        points: parseFloat(selectedPoints.points.purePoints?.value ?? "0"),
        subcategoryId: selectedPoints?.subcategory.subcategoryId,
      }
    : formInitialValues;

  return (
    <div style={styles.container}>
      <SideBar
        student={studentData}
        categoriesBarProps={categories}
        currLevel={currLevel}
        prevLevel={prevLevel}
        nextLevel={nextLevel}
        bonuses={bonuses}
      />
      <div style={styles.rightContainer}>
        {disableEditMode && (
          <NotEditableInfo
            hasEditableRights={hasEditableRights}
            isSelectedEditionActive={isSelectedEditionActive}
          />
        )}

        <Dialog open={isAddDialogOpen}>
          <IconButton onClick={closeAddDialog} style={styles.closeIcon}>
            <CloseIcon />
          </IconButton>

          <PointsForm
            categories={formCategories}
            handleConfirmClick={handleAddPointsConfirmation}
            mutationError={addPointsError?.message}
            variant="add"
            initialValues={initialValues}
            disableCategoryAndSubcategory={!!selectedPoints}
          />
        </Dialog>

        <Dialog open={isEditDialogOpen}>
          <IconButton onClick={closeEditDialog} style={styles.closeIcon}>
            <CloseIcon />
          </IconButton>

          <PointsForm
            categories={formCategories}
            handleConfirmClick={handleEditPointsConfirmation}
            mutationError={editPointsError?.message}
            initialValues={initialValues}
            variant="edit"
            disableCategoryAndSubcategory={true}
          />
        </Dialog>

        <Button
          onClick={openAddDialog}
          color="lightblue"
          disabled={disableEditMode}
        >
          Add Points
        </Button>

        <StudentTableWithFilters
          points={points}
          filterHeaderNames={filterHeaderNames}
          editFunctions={{
            handleDeleteClick: handleDeletePointsClick,
            handleAddClick: openAddDialog,
            handleEditClick: openEditDialog,
          }}
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
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 8,
  },
};
