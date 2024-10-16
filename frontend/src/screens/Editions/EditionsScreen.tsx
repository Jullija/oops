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

export const EditionsScreen = () => {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useEditionsQuery();

  const [isOpen, setIsOpen] = useState(false);
  const [setupEdition, { error: addError, reset }] = useSetupEditionMutation();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  const handleAddEdition = async (values: EditionFormValues) => {
    await setupEdition({
      variables: {
        editionName: values.name,
        editionYear: values.year,
      },
    });
    if (!addError) {
      refetch();
      setIsOpen(false);
      reset();
    }
  };

  return (
    <div style={styles.container}>
      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={() => setIsOpen(false)} />
        <AddEditionForm
          createError={addError?.message}
          handleAddEdition={handleAddEdition}
        />
      </Dialog>

      <button onClick={() => setIsOpen(true)}>dodaj edycje</button>
      {data?.edition.map((edition) => (
        <div
          style={styles.card}
          key={edition.editionId}
          onClick={() =>
            navigate(pathsGenerator.coordinator.Edition(edition.editionId))
          }
        >
          edition {edition.editionId}
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
};
