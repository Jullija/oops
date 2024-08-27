import { useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { useGroupsData } from "../../hooks/Groups/useGroupsData";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import { useFilterBarData } from "../../hooks/Groups/FilterBar/useFilterBarData";
import { getTimestampUniqueName } from "../../hooks/Groups/FilterBar/useLessonsData";

const styles: Styles = {
  container: {
    display: "flex",
    gap: 20,
    margin: 12,
  },
  rightSide: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
};

export const Groups = () => {
  const { groups, loading, error } = useGroupsData();
  const {
    weekdays,
    teachers,
    lessons,
    loading: filterOptionsLoading,
    error: filterOptionsError,
  } = useFilterBarData();

  const [input, setInput] = useState("");
  const [daysIds, setDaysIds] = useState<string[]>([]);
  const [teachersIds, setTeachersIds] = useState<string[]>([]);
  const [lessonsIds, setLessonsIds] = useState<string[]>([]);

  if (loading || filterOptionsLoading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;
  if (filterOptionsError)
    return <div>ERROR: {filterOptionsError?.message}</div>;

  const showAllGroups =
    !input &&
    daysIds.length === 0 &&
    teachersIds.length === 0 &&
    lessonsIds.length === 0;

  const filteredGroups = groups
    .filter((group) => daysIds.length === 0 || daysIds.includes(group.weekday))
    .filter(
      (group) =>
        lessonsIds.length === 0 ||
        lessonsIds.includes(getTimestampUniqueName(group.time)),
    )
    .filter(
      (group) =>
        teachersIds.length === 0 || teachersIds.includes(group.teacher.id),
    )
    .filter(
      (group) =>
        !input || isPartOfAString(input, [group.name, group.teacher.fullName]),
    );

  console.log("GROUPS: ", filteredGroups);

  return (
    <div style={styles.container}>
      <SideFilterBar
        weekdays={weekdays}
        teachers={teachers}
        lessons={lessons}
        onDaysFilterChange={(selectedIds) => setDaysIds(selectedIds)}
        onTeacherChange={(selectedIds) => setTeachersIds(selectedIds)}
        onLessonChange={(selectedIds) => setLessonsIds(selectedIds)}
      />
      <div style={styles.rightSide}>
        <GroupSearchField onInputChange={(input: string) => setInput(input)} />
        <GroupsList groups={showAllGroups ? groups : filteredGroups} />
      </div>
    </div>
  );
};
