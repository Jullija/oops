import { Edition } from "../../../screens/Editions/EditionsScreen";
import { Styles } from "../../../utils/Styles";
import { EditionCard } from "./EditionCard";

type EditionsListProps = {
  editions: Edition[];
  handleDeleteClick: (editionId: string) => void;
};

export const EditionsList = ({
  editions,
  handleDeleteClick,
}: EditionsListProps) => {
  return (
    <div style={styles.container}>
      {editions.map((edition) => (
        <EditionCard edition={edition} handleDeleteClick={handleDeleteClick} />
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
};
