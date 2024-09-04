import { useCallback, useMemo, useState } from "react";
import { GroupSearchField } from "../../components/Groups/GroupsList/GroupSearcher";
import { GroupsList } from "../../components/Groups/GroupsList/GroupsList";
import { useGroupsScreenData } from "../../hooks/Groups/useGroupsScreenData";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import { getTimestampUniqueString } from "../../hooks/Groups/FilterBar/useTimestampsData";
import {
  GroupRadioFilterItem,
  RadioFilterGroups,
} from "../../components/Groups/RadioFilterGroup";
import { useUser } from "../../hooks/common/useUser";
import { Group } from "../../hooks/common/useGroupsData";

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
      switch (selectedOption.id) {
        case "all":
          return true;
        case "yours":
          return group.teacher.id === teacherId;
        case "foreign":
          return group.teacher.id !== teacherId;
      }
    },
    [selectedOption.id, teacherId],
  );

  const doesGroupMatchFiltersAndInput = useCallback(
    (group: Group) => {
      const doesWeekdayMatch =
        weekdayIds.length === 0 || weekdayIds.includes(group.weekday.id);

      const doesTimestampMatch =
        timestampIds.length === 0 ||
        timestampIds.includes(getTimestampUniqueString(group.time));

      const doesTeacherMatch =
        teacherIds.length === 0 || teacherIds.includes(group.teacher.id);

      const doesInputMatch =
        input === "undefined" ||
        input === "" ||
        isPartOfAString(input, [group.name]);

      return (
        doesWeekdayMatch &&
        doesTimestampMatch &&
        doesTeacherMatch &&
        doesInputMatch
      );
    },
    [weekdayIds, input, timestampIds, teacherIds],
  );

  // never will be empty because of radio
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
        sections={[
          {
            pickerTitle: "Dzień Tygodnia",
            options: weekdays,
            onFiltersChange: (selectedIds) => setWeekdayIds(selectedIds),
          },
          {
            pickerTitle: "Godzina",
            options: timestamps,
            onFiltersChange: (selectedIds) => setTimestampIds(selectedIds),
          },
          {
            pickerTitle: "Prowadzący",
            options: teachers,
            onFiltersChange: (selectedIds) => setTeacherIds(selectedIds),
          },
        ]}
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
