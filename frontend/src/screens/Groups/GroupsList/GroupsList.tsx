// import { useNavigate } from "react-router-dom";
import { GroupsListItem } from "./GroupsListItem";
// import { pathsGenerator } from "../../../router";
import { useGetGroupsQuery } from "../../../graphql/getGroups.graphql.types";
import { Styles } from "../../../utils";
import { pathsGenerator } from "../../../router";
import { useNavigate } from "react-router-dom";
import { useEditionSelection } from "../../../hooks/common/useEditionSelection";

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

  const { selectedEdition } = useEditionSelection();
  const { data: groupsData } = useGetGroupsQuery({
    variables: {
      editionId: selectedEdition?.editionId ?? "-1",
    },
  });

  console.log(groupsData);

  return (
    <div style={styles.groupsContainer}>
      {groupsData?.edition[0].groups.map((group, index) => (
        <GroupsListItem
          groupName={group.groupName}
          key={index}
          onClick={() => navigate(pathsGenerator.teacher.Group(group.groupsId))}
        />
      ))}
    </div>
  );
};
