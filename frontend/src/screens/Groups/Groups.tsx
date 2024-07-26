import { useGroupsData } from "../../hooks/Groups/useGroupsData";
import { GroupsList } from "./GroupsList/GroupsList";

export const Groups = () => {
  const { loading, error, groups } = useGroupsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return <div>{groups && <GroupsList groups={groups} />}</div>;
};
