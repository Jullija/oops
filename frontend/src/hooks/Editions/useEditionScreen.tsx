import {
  EditionsQuery,
  useEditionsQuery,
} from "../../graphql/editions.graphql.types";
import { useState } from "react";
import { EditionFormValues } from "../../components/Editions/AddEditionForm";
import { useCreateEditionMutation } from "../../graphql/createEdition.graphql.types";
import { useDeleteEditionMutation } from "../../graphql/deleteEdition.graphql.types";

export type Edition = EditionsQuery["edition"][number];

export const useEditionsScreen = () => {
  const { data, loading, error, refetch } = useEditionsQuery();
  const editions: Edition[] = data?.edition ?? [];

  const [isOpen, setIsOpen] = useState(false);
  const [createEdition] = useCreateEditionMutation();
  const [createError, setCreateError] = useState<string>();

  const [deleteEdition] = useDeleteEditionMutation();

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
    } catch (error) {
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

  return {
    loading,
    error,
    editions,
    handleCreateClick,
    createError,
    handleDeleteClick,
    // TODO
    //deleteError,
    isOpen,
    openDialog: () => setIsOpen(true),
    closeDialog,
  };
};
