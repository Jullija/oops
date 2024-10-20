import { useEffect } from "react";
import { isEditionActive } from "../../utils/utils";
import { useUser } from "./useUser";

// TODO refactor this to has editionId ?
export function useEditionSelection() {
  const { editions, selectedEdition, setSelectedEdition } = useUser();

  useEffect(() => {
    const activeEdition = editions.find(isEditionActive);

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
