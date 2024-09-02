import { useCallback, useMemo, useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { useGroupsScreenData } from "../../hooks/Groups/useGroupsScreenData";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import { getTimestampUniqueName } from "../../hooks/Groups/FilterBar/useTimestampsData";
import {
  GroupRadioFilterItem,
  RadioFilterGroups,
} from "../../components/Groups/RadioFilterGroup";
import { useUser } from "../../hooks/common/useUser";
import { Group } from "../../hooks/Groups/useGroupsData";

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

// TODO try to reuse it in hall of fame
const radioButtonOptions: GroupRadioFilterItem[] = [
  { id: "all", name: "wszystkie" },
  { id: "yours", name: "twoje" },
  { id: "foreign", name: "obce" },
];

export const Groups = () => {
  const { user } = useUser();
  const teacherId = user.userId;
  const { groups, weekdays, teachers, timestamps, loading, error } =
    useGroupsScreenData();

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

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

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
