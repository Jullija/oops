import { Dialog } from "@mui/material";
import { Styles } from "../../../../utils/Styles";
import { AddLevelForm, LevelFormValues } from "./AddLevelForm";
import { LevelsList } from "./LevelsList/LevelsList";
import { useState } from "react";
import { CloseHeader } from "../../../dialogs/CloseHeader";
import {
  Level,
  useLevelsSection,
} from "../../../../hooks/Edition/useLevelsSection";

type LevelsSectionProps = {
  editionId: number;
};

// TODO add
// TODO select

export const LevelsSection = ({ editionId }: LevelsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [addCategory, { error: addError, reset: resetAddCategoryError }] =
  //   useAddCategoryMutation();
  // const [addCategoryToEdition, { error: addToEditionError }] =
  //   useSetupAddCategoryToEditionMutation();

  console.log("here!!!");
  const { levels, selectedLevels, loading, error } =
    useLevelsSection(editionId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  const handleAddLevel = async (values: LevelFormValues) => {
    console.log("handle add level to implement: ", values);
    // await addCategory({
    //   variables: {
    //     categoryName: values.categoryName,
    //     canAddPoints: values.canAddPoints,
    //   },
    // });
    // if (!addError) {
    //   refetch();
    //   setIsOpen(false);
    //   resetAddCategoryError();
    // }
  };

  const handleSelectLevelClick = async (level: Level) => {
    console.log("handle select level to implement: ", level);
    // await addCategoryToEdition({
    //   variables: {},
    // });
    // if (!addToEditionError) {
    //   refetch();
    //   resetAddCategoryError();
    // }
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(true)}>add level</button>

      <LevelsList
        levels={selectedLevels}
        selectedLevels={selectedLevels}
        handleSelectLevelClick={handleSelectLevelClick}
        title={"Selected levels"}
      />
      <LevelsList
        levels={levels}
        selectedLevels={selectedLevels}
        handleSelectLevelClick={handleSelectLevelClick}
        title={"All levels"}
      />

      <Dialog open={isOpen}>
        <CloseHeader onCloseClick={() => setIsOpen(false)} />
        <AddLevelForm
          // TODO
          createError={undefined}
          handleAddLevel={handleAddLevel}
        />
      </Dialog>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};
