import { useNavigate } from "react-router-dom";
import { useGetGroupsQuery } from "../../graphql/getGroups.graphql.types";
import { Styles } from "../../utils";
import { GroupsListItem } from "./GroupsListItem";
import { pathsGenerator } from "../../router";

const styles: Styles = {
  groupsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    margin: 12,
  },
};

export const GroupsList = () => {
  const navigate = useNavigate();

  const { data: groupsData } = useGetGroupsQuery({
    variables: {
      // TODO editionId should be changed
      editionId: "1",
    },
  });

  return (
    <div style={styles.groupsContainer}>
      {groupsData?.groups.map((group, index) => (
        <GroupsListItem
          groupName={group.groupName}
          key={index}
          onClick={() => navigate(pathsGenerator.Group(group.groupsId))}
        />
      ))}
    </div>
  );
};
