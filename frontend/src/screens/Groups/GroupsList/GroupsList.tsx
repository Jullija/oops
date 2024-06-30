import { GroupsListItem } from "./GroupsListItem";
import { Styles } from "../../../utils";
import { pathsGenerator } from "../../../router";
import { useNavigate } from "react-router-dom";
import { GroupData } from "../../../hooks/Groups/useGroupsData";

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
  groups: GroupData[];
};

export const GroupsList = ({ groups }: GroupsProps) => {
  const navigate = useNavigate();

  return (
    <div style={styles.groupsContainer}>
      {groups.map((group) => (
        <GroupsListItem
          key={group.id}
          groupName={group.name}
          onClick={() => navigate(pathsGenerator.teacher.Group(group.id))}
        />
      ))}
    </div>
  );
};
