import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { useGroupsData } from "../../hooks/Groups/useGroupsData";

export const Groups = () => {
  const { loading, error, groups } = useGroupsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return <div>{groups && <GroupsList groups={groups} />}</div>;
};
