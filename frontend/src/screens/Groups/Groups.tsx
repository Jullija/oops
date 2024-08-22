import { useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { Group, useGroupsData } from "../../hooks/Groups/useGroupsData";

export const Groups = () => {
  const { groups, loading, error } = useGroupsData();
  const [filteredGroups, setFilteredGroups] = useState<Group[] | undefined>(
    undefined,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  const onInputChange = (filteredGroups: Group[]) => {
    setFilteredGroups(filteredGroups);
  };

  return (
    <div>
      <GroupSearchField onInputChange={onInputChange} groups={groups} />
      <GroupsList groups={filteredGroups ?? groups} />
    </div>
  );
};
