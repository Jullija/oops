import { useGroupsData } from "../../hooks/Groups/useGroupsData";
import { GroupsList } from "./GroupsList/GroupsList";
import { SearchStudent } from "./SearchStudent";

export const Groups = () => {
  const { loading, error, students, groups } = useGroupsData();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return (
    <div>
      {groups && <GroupsList groups={groups} />}
      {students && <SearchStudent students={students} />}
    </div>
  );
};
