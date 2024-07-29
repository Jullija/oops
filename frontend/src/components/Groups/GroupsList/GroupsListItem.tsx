import { Styles } from "../../../utils/Styles";

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
  withEditableRights: boolean;
};

export const GroupsListItem = ({
  groupName,
  onClick,
  withEditableRights,
}: GroupsListItem) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <div>{groupName}</div>
      {withEditableRights && <div style={{ color: "blue" }}>editable</div>}
    </div>
  );
};
