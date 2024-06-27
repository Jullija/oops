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

  // TODO connect with student profile
  const handleStudentCardClick = () => {};

  return (
    <div style={styles.screenContainer}>
      <TextInput
        handleChange={handleSearchInputChange}
        value={searchInputValue}
        name={"searchText"}
        label="search student"
      />

      <div style={styles.studentsContainer}>
        {studentsData?.users
          ?.filter((user) => {
            const fullName =
              `${user.firstName} ${user.secondName}`.toLowerCase();
            return fullName.includes(searchInputValue.toLowerCase());
          })
          .map((user, index) => {
            return (
              <StudentCard
                key={index}
                firstName={user.firstName}
                secondName={user.secondName}
                onClick={handleStudentCardClick}
              />
            );
          })}
      </div>
    </div>
  );
};
