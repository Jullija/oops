import { GroupsListItem } from "./GroupsListItem";
import { Group } from "../../../utils/types";
import { Styles } from "../../../utils/Styles";
import { pathsGenerator } from "../../../router/paths";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/common/useUser";

const styles: Styles = {
  groupsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    margin: 12,
  },
};

type GroupsProps = {
  groups: Group[];
};

export const GroupsList = ({ groups }: GroupsProps) => {
  const navigate = useNavigate();
  const user = useUser();

  return (
    <div style={styles.groupsContainer}>
      {groups.map((group) => (
        <GroupsListItem
          key={group.id}
          groupName={group.name}
          onClick={() => navigate(pathsGenerator.teacher.Group(group.id))}
          withEditableRights={group.teacherId === user.user.userId}
        />
      ))}
    </div>
  );
};
