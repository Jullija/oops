import { EditionsQuery } from "../../graphql/editions.graphql.types";
import { Styles } from "../../utils/Styles";
import { Dialog } from "@mui/material";
import { CloseHeader } from "../../components/dialogs/CloseHeader";
import { AddEditionForm } from "../../components/Editions/AddEditionForm";
import { EditionsList } from "../../components/Editions/EditionsList/EditionsList";
import { useEditionsScreen } from "../../hooks/Editions/useEditionScreen";

export type Edition = EditionsQuery["edition"][number];

export const EditionsScreen = () => {
  const {
    editions,
    loading,
    error,
    handleCreateClick,
    createError,
    isOpen,
    openDialog,
    closeDialog,
    handleDeleteClick,
  } = useEditionsScreen();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return (
    <div style={styles.container}>
      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={closeDialog} />
        <AddEditionForm
          createError={createError}
          handleAddEdition={handleCreateClick}
        />
      </Dialog>

      <button onClick={openDialog}>utwórz edycję</button>

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
