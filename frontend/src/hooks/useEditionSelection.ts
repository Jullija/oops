import { useEffect } from "react";
import { useUserEditions } from "./useUserEditions";

export function useEditionSelection() {
  const { editions, selectedEdition, setSelectedEdition } = useUserEditions();

  useEffect(() => {
    if (editions.length === 1) {
      setSelectedEdition(editions[0]);
    }
  }, [editions, setSelectedEdition]);

  const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedEdition = editions.find(
      (edition) => edition.editionId === selectedId,
    );
    if (selectedEdition) {
      setSelectedEdition(selectedEdition);
    }
  };

  return {
    editions,
    selectedEdition,
    handleEditionChange,
  };
}
