import { useCallback, useMemo, useState } from "react";
import { SideFilterBar } from "../../components/Groups/FilterBar/SideFilterBar";
import { Styles } from "../../utils/Styles";
import { isPartOfAString } from "../../utils/strings";
import {
  GroupRadioFilterItem,
  RadioFilterGroups,
} from "../../components/Groups/RadioFilterGroup";
import { StudentsListSearcher } from "../../components/Students/StudentsListSearcher";
import {
  StudentList,
  StudentsList,
} from "../../components/Students/StudentsList";
import { useStudentsScreenData } from "../../hooks/Students/useStudentsScreenData";
import { groupsRadioButtonOptions } from "../../utils/constants";

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

export const StudentsScreen = () => {
  const { teacherId, groups, students, loading, error } =
    useStudentsScreenData();

  const [input, setInput] = useState("");
  const [groupsIds, setGroupsIds] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<GroupRadioFilterItem>({
    id: "all",
    name: "wszystkie",
  });

  const doesGroupMatchRadioButtons = useCallback(
    (student: StudentList) => {
      switch (selectedOption.id) {
        case "all":
          return true;
        case "yours":
          return student.group.teacher.id === teacherId;
        case "foreign":
          return student.group.teacher.id !== teacherId;
      }
    },
    [selectedOption.id, teacherId],
  );

  const doesGroupMatchFiltersAndInput = useCallback(
    (student: StudentList) => {
      const doesGroupMatch =
        groupsIds.length === 0 || groupsIds.includes(student.group.id);

      const doesInputMatch =
        input === "undefined" ||
        input === "" ||
        isPartOfAString(input, [`${student.firstName} ${student.secondName}`]);

      return doesGroupMatch && doesInputMatch;
    },
    [groupsIds, input],
  );

  // never will be empty because of radio
  const studentsWithFilterAndRadio = useMemo(
    () =>
      students.filter(
        (student) =>
          doesGroupMatchFiltersAndInput(student) &&
          doesGroupMatchRadioButtons(student),
      ),
    [doesGroupMatchFiltersAndInput, doesGroupMatchRadioButtons, students],
  );

  // TODO is it possible to reduce number of rerenders?

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return (
    <div style={styles.container}>
      <SideFilterBar
        sections={[
          {
            pickerTitle: "Grupa",
            options: groups,
            onFiltersChange: (selectedIds) => setGroupsIds(selectedIds),
          },
        ]}
      />
      <div style={styles.rightSide}>
        <div style={styles.topBar}>
          <StudentsListSearcher
            onInputChange={(input: string) => setInput(input)}
          />
          <RadioFilterGroups
            options={groupsRadioButtonOptions}
            onOptionChange={(option) => setSelectedOption(option)}
            selectedOption={selectedOption}
          />
        </div>
        <StudentsList students={studentsWithFilterAndRadio} />
      </div>
    </div>
  );
};
