import { ChangeEvent, useState } from "react";
import { Styles, SearchStudent } from "../../../utils";
import { StudentCard } from "./StudentCard";
import { TextInput } from "../../../components";

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
  students: SearchStudent[];
};

export const StudentSearcher = ({ students }: SearchStudentProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const getFilteredStudents = () => {
    const filteredStudents =
      students.filter((student) =>
        student.fullName
          ?.toLowerCase()
          .includes(searchInputValue.toLowerCase()),
      ) ?? [];
    return filteredStudents;
  };

  return (
    <div style={styles.screenContainer}>
      <TextInput
        handleChange={handleSearchInputChange}
        value={searchInputValue}
        name={"searchText"}
        label="search student"
      />

      <div style={styles.studentsContainer}>
        {getFilteredStudents().map((user, index) => {
          return (
            <StudentCard
              key={index}
              fullName={user.fullName}
              userId={user.userId}
            />
          );
        })}
      </div>
    </div>
  );
};
