import { Styles } from "../../utils/Styles";
import { useParams } from "react-router-dom";
import { PointsForm } from "../../components/StudentProfile/PointsForm/PointsForm";
import { FormPoints } from "../../components/StudentProfile/PointsForm/types";
import { useCreatePointsMutation } from "../../graphql/createPoints.graphql.types";
import { useUser } from "../../hooks/common/useUser";
import { useStudentProfileData } from "../../hooks/StudentProfile/useStudentProfileData";
import { SideBar } from "../../components/StudentProfile/SideBar";
import { useFormCategories } from "../../hooks/common/useFormCategories";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { StudentTableWithFilters } from "../../components/StudentProfile/table/StudentTableWithFilters";
import { useEditPointsMutation } from "../../graphql/editPoints.graphql.types";
import { Points } from "../../hooks/StudentProfile/useStudentData";

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
  button: {
    cursor: "pointer",
    backgroundColor: "pink",
    width: 100,
  },
};

export function TeacherStudentProfile() {
  const { user } = useUser();

  const params = useParams();
  const studentId = params.id;

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

  const [createPoints, { error: createPointsError }] =
    useCreatePointsMutation();

  const [editPoints, { error: editPointsError }] = useEditPointsMutation();

  const {
    categories: formCategories,
    loading: formDataLoading,
    error: formDataError,
  } = useFormCategories();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [pointsToEdit, setPointsToEdit] = useState<Points | undefined>(
    undefined,
  );

  if (loading || formDataLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (formDataError) return <p>Error: {formDataError.message}</p>;

  if (!studentData) return <p>Student is undefined</p>;
  if (!currLevel) return <p>Curr level is undefined</p>;

  const handleAdd = async (formPoints: FormPoints) => {
    await createPoints({
      variables: {
        studentId: parseInt(studentId as string),
        subcategoryId: parseInt(formPoints.subcategoryId),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    });

    if (!createPointsError) {
      closeAddDialog();
      refetch();
    }
  };

  const handleEdit = async (formPoints: FormPoints) => {
    await editPoints({
      variables: {
        pointsId: parseInt(pointsToEdit?.points.purePoints?.pointsId as string),
        teacherId: parseInt(user.userId),
        value: formPoints.points,
      },
    });

    if (!editPointsError) {
      closeEditDialog();
      refetch();
    }
  };

  const closeAddDialog = () => setIsAddOpen(false);
  const openAddDialog = () => setIsAddOpen(true);

  const closeEditDialog = () => setIsEditOpen(false);
  const openEditDialog = () => setIsEditOpen(true);

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
        <Dialog open={isAddOpen}>
          <PointsForm
            handleAddPoints={handleAdd}
            createError={createPointsError?.message}
            categories={formCategories}
          />
          <div style={styles.button} onClick={closeAddDialog}>
            close
          </div>
        </Dialog>

        <Dialog open={isEditOpen}>
          <PointsForm
            handleAddPoints={handleEdit}
            createError={editPointsError?.message}
            categories={formCategories}
            initialValues={{
              subcategoryId: pointsToEdit?.subcategory.subcategoryId as string,
              points: pointsToEdit?.points.purePoints?.value ?? 0,
              categoryId: pointsToEdit?.subcategory.category
                .categoryId as string,
            }}
          />
          <div style={styles.button} onClick={closeEditDialog}>
            close
          </div>
        </Dialog>

        {/* TODO display only when editable  */}
        <div style={styles.button} onClick={openAddDialog}>
          add points
        </div>

        <StudentTableWithFilters
          points={points}
          filterHeaderNames={filterHeaderNames}
          handleEditClick={(points: Points) => {
            setPointsToEdit(points);
            setTimeout(() => openEditDialog(), 1000);
          }}
        />
      </div>
    </div>
  );
}
