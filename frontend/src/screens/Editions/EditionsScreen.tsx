import { useNavigate } from "react-router-dom";
import { useEditionsQuery } from "../../graphql/editions.graphql.types";
import { pathsGenerator } from "../../router/paths";
import { Styles } from "../../utils/Styles";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { CloseHeader } from "../../components/dialogs/CloseHeader";
import { useSetupEditionMutation } from "../../graphql/setupEdition.graphql.types";
import {
  AddEditionForm,
  EditionFormValues,
} from "../../components/Editions/AddEditionForm";
import { useDeleteEditionMutation } from "../../graphql/deleteEdition.graphql.types";

export const EditionsScreen = () => {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useEditionsQuery();

  const [isOpen, setIsOpen] = useState(false);
  const [setupEdition] = useSetupEditionMutation();
  const [formError, setFormError] = useState<string>();

  const [deleteEdition] = useDeleteEditionMutation();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  const closeDialog = () => {
    setFormError(undefined);
    setIsOpen(false);
  };

  const handleAddEdition = async (values: EditionFormValues) => {
    try {
      await setupEdition({
        variables: {
          editionName: values.name,
          editionYear: values.year,
        },
      });

      refetch();
      closeDialog();
    } catch (error: unknown) {
      console.error(error);

      setFormError(
        error instanceof Error ? error.message : "Unexpected error received.",
      );
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteEdition({ variables: { editionId: parseInt(id) } });
      refetch();
    } catch (error) {
      // TODO some kind of global error ?
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={closeDialog} />
        <AddEditionForm
          createError={formError}
          handleAddEdition={handleAddEdition}
        />
      </Dialog>

      <button onClick={() => setIsOpen(true)}>dodaj edycje</button>
      {data?.edition.map((edition) => (
        <div style={styles.card} key={edition.editionId}>
          <div>
            edition {edition.editionId},{" "}
            {`${edition.startDate.slice(0, 4)}/${edition.endDate.slice(0, 4)}`}
          </div>
          <button
            style={styles.showButton}
            onClick={() =>
              navigate(pathsGenerator.coordinator.Edition(edition.editionId))
            }
          >
            show
          </button>
          <button
            style={styles.deleteButton}
            onClick={() => handleDeleteClick(edition.editionId)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    gap: 12,
    flexDirection: "row",
    margin: 12,
  },
  card: {
    border: "1px solid black",
    padding: 12,
  },
  showButton: {
    backgroundColor: "green",
    padding: 4,
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 4,
    cursor: "pointer",
  },
};
