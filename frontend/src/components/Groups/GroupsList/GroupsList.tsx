import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/common/useUser";
import { pathsGenerator } from "../../../router/paths";
import { Styles } from "../../../utils/Styles";
import { GroupCard } from "./GroupCard";
import { Group } from "../../../hooks/Groups/useGroupsData";

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
        <GroupCard
          key={group.id}
          group={group}
          onClick={() => navigate(pathsGenerator.teacher.Group(group.id))}
          withEditableRights={group.teacher.id === user.user.userId}
        />
      ))}
    </div>
  );
};
