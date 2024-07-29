import { useGroupsListByEditionQuery } from "../../graphql/groupsListByEdition.graphql.types";
import { Group } from "../../utils/types";
import { useEditionSelection } from "../common/useEditionSelection";

export const useGroupsData = () => {
  const { selectedEdition } = useEditionSelection();

  const { data, loading, error } = useGroupsListByEditionQuery({
    variables: {
      editionId: selectedEdition?.editionId as string,
    },
    skip: !selectedEdition,
  });

  // TODO there must be a better way to get teacherId
  const groups: Group[] | undefined = data?.editionByPk?.groups.map((group) => {
    return {
      name: group.groupName,
      id: group.groupsId,
      teacherId: group?.userGroups[0]?.user.userId ?? "-1",
    };
  });

  return { loading, error, groups };
};
