import { Styles } from "../../../utils";

const styles: Styles = {
  container: {
    border: "1px solid black",
    width: 240,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};

type GroupsListItem = {
  groupName: string;
  onClick: () => void;
};

export const GroupsListItem = ({ groupName, onClick }: GroupsListItem) => {
  return (
    <div style={styles.container} onClick={onClick}>
      {groupName}
    </div>
  );
};
