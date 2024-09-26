import { useEffect } from "react";
import { useUserEditions } from "./useUserEditions";
import { isActive } from "../../utils/utils";

// TODO refactor this to has editionId ?
export function useEditionSelection() {
  const { editions, selectedEdition, setSelectedEdition } = useUserEditions();

  useEffect(() => {
    const activeEdition = editions.find(isActive);

    if (activeEdition) {
      setSelectedEdition(activeEdition);
    } else {
      setSelectedEdition(editions[0]);
    }
  }, [editions, setSelectedEdition]);

  // TODO will be used later on
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
