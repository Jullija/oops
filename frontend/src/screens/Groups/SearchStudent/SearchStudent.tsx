import { ChangeEvent, useState } from "react";
import { Styles } from "../../../utils";
import { StudentCard } from "./StudentCard";
import { TextInput } from "../../../components";
import { useGetStudentsQuery } from "../../../graphql/getStudents.graphql.types";

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

export const SearchStudent = () => {
  const { data: studentsData } = useGetStudentsQuery();

  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const getFilteredStudents = () => {
    const filteredStudents =
      studentsData?.users?.filter((user) => {
        return (
          !!user.fullName &&
          user.fullName.toLowerCase().includes(searchInputValue.toLowerCase())
        );
      }) ?? [];
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
          console.log("fullNAme: ", user.fullName);
          return (
            <StudentCard
              key={index}
              fullName={user.fullName ?? undefined}
              userId={user.userId}
            />
          );
        })}
      </div>
    </div>
  );
};
