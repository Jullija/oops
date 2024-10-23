import { Styles } from "../../../../utils/Styles";

export type FolderCardProps = {
  title: string;
  onClick: () => void;
  isSelected: boolean;
};

export const FolderCard = ({ title, onClick, isSelected }: FolderCardProps) => {
  return (
    <div onClick={onClick}>
      <div style={isSelected ? styles.selected : undefined}>{title}</div>
    </div>
  );
};

const styles: Styles = {
  card: {
    padding: 20,
    borderWidth: 1,
  },
  selected: {
    fontWeight: "bold",
  },
};
