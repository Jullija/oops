import { useCallback, useMemo, useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { Group, useGroupsData } from "../../hooks/Groups/useGroupsData";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import { useFilterBarData } from "../../hooks/Groups/FilterBar/useFilterBarData";
import { getTimestampUniqueName } from "../../hooks/Groups/FilterBar/useLessonsData";
import {
  GroupRadioFilterItem,
  RadioFilterGroups,
} from "../../components/Groups/RadioFilterGroup";
import { useUser } from "../../hooks/common/useUser";

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
  topBar: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
};

const radioButtonOptions: GroupRadioFilterItem[] = [
  { id: "all", name: "wszystkie" },
  { id: "yours", name: "twoje" },
  { id: "foreign", name: "obce" },
];

export const Groups = () => {
  const { user } = useUser();
  const teacherId = user.userId;
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
  const [selectedOption, setSelectedOption] = useState<GroupRadioFilterItem>({
    id: "all",
    name: "wszystkie",
  });

  const groupsWithRadio = useMemo(
    () =>
      groups.filter((group) => {
        switch (selectedOption.name) {
          case "wszystkie":
            return true;
          case "twoje":
            return group.teacher.id === teacherId;
          case "obce":
            return group.teacher.id !== teacherId;
        }
      }),
    [groups, selectedOption.name, teacherId],
  );

  const doesGroupMatchFiltersAndInput = useCallback(
    (group: Group) => {
      const doesDayMatch =
        daysIds.length === 0 || daysIds.includes(group.weekday);

      const doesTimestampMatch =
        lessonsIds.length === 0 ||
        lessonsIds.includes(getTimestampUniqueName(group.time));

      const doesTeacherMatch =
        teachersIds.length === 0 || teachersIds.includes(group.teacher.id);

      const doesInputMatch =
        !!input || isPartOfAString(input, [group.name, group.teacher.fullName]);

      return (
        doesDayMatch && doesTimestampMatch && doesTeacherMatch && doesInputMatch
      );
    },
    [daysIds, input, lessonsIds, teachersIds],
  );

  const groupsWithFilterAndRadio = useMemo(
    () =>
      groupsWithRadio.filter((group) => doesGroupMatchFiltersAndInput(group)),
    [doesGroupMatchFiltersAndInput, groupsWithRadio],
  );

  const applyFilters = useMemo(
    () =>
      !!input ||
      daysIds.length !== 0 ||
      teachersIds.length !== 0 ||
      lessonsIds.length !== 0,
    [daysIds.length, input, lessonsIds.length, teachersIds.length],
  );

  if (loading || filterOptionsLoading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;
  if (filterOptionsError)
    return <div>ERROR: {filterOptionsError?.message}</div>;

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
        <div style={styles.topBar}>
          <GroupSearchField
            onInputChange={(input: string) => setInput(input)}
          />
          <RadioFilterGroups
            options={radioButtonOptions}
            onOptionChange={(option) => setSelectedOption(option)}
            selectedOption={selectedOption}
          />
        </div>
        <GroupsList
          groups={applyFilters ? groupsWithFilterAndRadio : groupsWithRadio}
        />
      </div>
    </div>
  );
};
