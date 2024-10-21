import {
  EditionsQuery,
  useEditionsQuery,
} from "../../graphql/editions.graphql.types";
import { Styles } from "../../utils/Styles";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { CloseHeader } from "../../components/dialogs/CloseHeader";
import {
  AddEditionForm,
  EditionFormValues,
} from "../../components/Editions/AddEditionForm";
import { useCreateEditionMutation } from "../../graphql/createEdition.graphql.types";
import { useDeleteEditionMutation } from "../../graphql/deleteEdition.graphql.types";
import { EditionsList } from "../../components/Editions/EditionsList/EditionsList";

export type Edition = EditionsQuery["edition"][number];

export const EditionsScreen = () => {
  const { data, loading, error, refetch } = useEditionsQuery();
  const editions: Edition[] = data?.edition ?? [];

  const [isOpen, setIsOpen] = useState(false);
  const [createEdition] = useCreateEditionMutation();
  const [createError, setCreateError] = useState<string>();

  const [deleteEdition] = useDeleteEditionMutation();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  const closeDialog = () => {
    setCreateError(undefined);
    setIsOpen(false);
  };

  const handleCreateClick = async (values: EditionFormValues) => {
    try {
      await createEdition({
        variables: {
          editionName: values.name,
          editionYear: values.year,
        },
      });

      refetch();
      closeDialog();
    } catch (error: unknown) {
      console.error(error);

      setCreateError(
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
          createError={createError}
          handleAddEdition={handleCreateClick}
        />
      </Dialog>

      <button onClick={() => setIsOpen(true)}>dodaj edycje</button>

      <EditionsList editions={editions} handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    gap: 12,
    flexDirection: "column",
    margin: 12,
  },
};
