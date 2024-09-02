import { useCallback, useMemo, useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { Group, useGroupsData } from "../../hooks/Groups/useGroupsData";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import { useFilterBarData } from "../../hooks/Groups/FilterBar/useFilterBarData";
import { getTimestampUniqueName } from "../../hooks/Groups/FilterBar/useTimestampsData";
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
  const {
    groups,
    loading: groupsLoading,
    error: groupsError,
  } = useGroupsData();
  const {
    weekdays,
    teachers,
    timestamps,
    loading: filterOptionsLoading,
    error: filterOptionsError,
  } = useFilterBarData();

  // TODO maybe one hook?

  const [input, setInput] = useState("");
  const [weekdayIds, setWeekdayIds] = useState<string[]>([]);
  const [teacherIds, setTeacherIds] = useState<string[]>([]);
  const [timestampIds, setTimestampIds] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<GroupRadioFilterItem>({
    id: "all",
    name: "wszystkie",
  });

  const doesGroupMatchRadioButtons = useCallback(
    (group: Group) => {
      switch (selectedOption.name) {
        case "wszystkie":
          return true;
        case "twoje":
          return group.teacher.id === teacherId;
        case "obce":
          return group.teacher.id !== teacherId;
      }
    },
    [selectedOption.name, teacherId],
  );

  const doesGroupMatchFiltersAndInput = useCallback(
    (group: Group) => {
      const doesDayMatch =
        weekdayIds.length === 0 || weekdayIds.includes(group.weekday);

      const doesTimestampMatch =
        timestampIds.length === 0 ||
        timestampIds.includes(getTimestampUniqueName(group.time));

      const doesTeacherMatch =
        teacherIds.length === 0 || teacherIds.includes(group.teacher.id);

      const doesInputMatch =
        !!input || isPartOfAString(input, [group.name, group.teacher.fullName]);

      return (
        doesDayMatch && doesTimestampMatch && doesTeacherMatch && doesInputMatch
      );
    },
    [weekdayIds, input, timestampIds, teacherIds],
  );

  const groupsWithFilterAndRadio = useMemo(
    () =>
      groups.filter(
        (group) =>
          doesGroupMatchFiltersAndInput(group) &&
          doesGroupMatchRadioButtons(group),
      ),
    [doesGroupMatchFiltersAndInput, doesGroupMatchRadioButtons, groups],
  );

  // TODO is it possible to reduce number of rerenders?

  if (groupsLoading || filterOptionsLoading) return <div>loading...</div>;
  if (groupsError) return <div>ERROR: {groupsError?.message}</div>;
  if (filterOptionsError)
    return <div>ERROR: {filterOptionsError?.message}</div>;

  return (
    <div style={styles.container}>
      <SideFilterBar
        weekdays={weekdays}
        teachers={teachers}
        timestamps={timestamps}
        onWeekdayFilterChange={(selectedIds) => setWeekdayIds(selectedIds)}
        onTeacherChange={(selectedIds) => setTeacherIds(selectedIds)}
        onTimestampChange={(selectedIds) => setTimestampIds(selectedIds)}
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
        <GroupsList groups={groupsWithFilterAndRadio} />
      </div>
    </div>
  );
};
