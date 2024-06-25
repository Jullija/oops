import { useGetGroupsQuery } from "../../graphql/getGroups.graphql.types";
import { Styles } from "../../utils";
import { GroupsListItem } from "./GroupsListItem";

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
  // TODO change to current editionId
  const editionId = "1";

  const { data: groupsData } = useGetGroupsQuery({
    variables: {
      editionId: editionId,
    },
  });

  return (
    <div style={styles.groupsContainer}>
      {groupsData?.groups.map((group, index) => (
        <GroupsListItem
          id={group.groupsId}
          name={group.groupName}
          key={index}
        />
      ))}
    </div>
  );
};
