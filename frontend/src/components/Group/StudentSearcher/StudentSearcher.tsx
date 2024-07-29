import { ChangeEvent, useMemo, useState } from "react";
import { ShortStudent } from "../../../utils/types";
import { Styles } from "../../../utils/Styles";
import { StudentCard } from "./StudentCard";
import { TextInput } from "../../inputs/TextInput";
import { isPartOfAString } from "../../../utils/strings";

const styles: Styles = {
  screenContainer: {
    margin: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  studentsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

type SearchStudentProps = {
  students: ShortStudent[];
};

export const StudentSearcher = ({ students }: SearchStudentProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const filteredStudents = useMemo(() => {
    return (
      students.filter(
        (student) =>
          student.fullName &&
          isPartOfAString(searchInputValue, student.fullName),
      ) ?? []
    );
  }, [students, searchInputValue]);

  return (
    <div style={styles.screenContainer}>
      <TextInput
        handleChange={handleSearchInputChange}
        value={searchInputValue}
        name={"searchText"}
        label="search student"
      />

      <div style={styles.studentsContainer}>
        {filteredStudents.map((user, index) => {
          return (
            <StudentCard
              key={index}
              student={{ fullName: user.fullName, id: user.id }}
            />
          );
        })}
      </div>
    </div>
  );
};
