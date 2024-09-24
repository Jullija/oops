import { useEffect } from "react";
import { useUserEditions } from "./useUserEditions";

export function useEditionSelection() {
  const { editions, selectedEdition, setSelectedEdition } = useUserEditions();

  useEffect(() => {
    // TODO set current edition as a default one
    const oneEdition = editions.find((e) => e.editionId === "1");

    if (oneEdition) {
      setSelectedEdition(oneEdition);
    } else {
      setSelectedEdition(editions[0]);
    }
  }, [editions, setSelectedEdition]);

  // const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedId = event.target.value;
  //   const selectedEdition = editions.find(
  //     (edition) => edition.editionId === selectedId
  //   );
  //   if (selectedEdition) {
  //     setSelectedEdition(selectedEdition);
  //   }
  // };

  return {
    editions,
    selectedEdition,
    // handleEditionChange,
  };
}
