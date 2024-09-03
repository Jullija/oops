import { Group } from "../../../hooks/Groups/useGroupsData";
import { Styles } from "../../../utils/Styles";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    width: 240,
    height: 120,
    cursor: "pointer",
    padding: 12,
    gap: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
};

type GroupCardProps = {
  group: Group;
  onClick: () => void;
  withEditableRights: boolean;
};

export const GroupCard = ({
  group,
  onClick,
  withEditableRights,
}: GroupCardProps) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.title}>{group.name}</div>
      <div>{group.teacher.fullName}</div>
      <div>
        {group.weekday.name} {group.time.start}-{group.time.end}
      </div>
      {withEditableRights && <div style={{ color: "blue" }}>editable</div>}
    </div>
  );
};
