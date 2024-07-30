import { ChangeEvent, useState } from "react";
import { isPartOfAString } from "../../utils/strings";
import { HallOfFameStudentData } from "./StudentCard";
import { TextInput } from "../inputs/TextInput";

type SearchStudentProps = {
  onInputChange: (filteredGroups: HallOfFameStudentData[]) => void;
  students: HallOfFameStudentData[];
};

// we probably should implement some universal filtering

export const HallOfFameStudentSearcher = ({
  onInputChange,
  students,
}: SearchStudentProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const filteredStudents = input
      ? students.filter((student) => isPartOfAString(input, [student.nick]))
      : students;

    setSearchInputValue(input);
    onInputChange(filteredStudents);
  };

  return (
    <TextInput
      handleChange={handleSearchInputChange}
      value={searchInputValue}
      name={"searchText"}
      label="search students"
    />
  );
};
