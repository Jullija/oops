import { ChangeEvent, useState } from "react";
import { isPartOfAString } from "../../../utils/strings";
import { Group } from "../../../hooks/Groups/useGroupsData";
import { TextInput } from "../../inputs/TextInput";

type SearchStudentProps = {
  onInputChange: (filteredGroups: Group[]) => void;
  groups: Group[];
};

export const GroupSearchField = ({
  onInputChange,
  groups,
}: SearchStudentProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const filteredGroups = input
      ? groups.filter((group) =>
          isPartOfAString(input, [group.name, group.teacher.fullName]),
        )
      : groups;

    setSearchInputValue(input);
    onInputChange(filteredGroups);
  };

  return (
    <TextInput
      handleChange={handleSearchInputChange}
      value={searchInputValue}
      name={"searchGroup"}
      label="search group"
    />
  );
};
