import { ChangeEvent, useState } from "react";
import { Styles } from "../../../utils";
import { StudentCard } from "./StudentCard";
import { TextInput } from "../../../components";
import { useGetStudentsQuery } from "../../../graphql/getStudents.graphql.types";
import { useEditionSelection } from "../../../hooks/common/useEditionSelection";

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

type SearchStudentData = {
  fullName?: string;
  userId: string;
};

export const SearchStudent = () => {
  const { selectedEdition } = useEditionSelection();
  const { data: studentsData } = useGetStudentsQuery({
    variables: { editionId: selectedEdition?.editionId ?? "-1" },
  });

  const students: SearchStudentData[] =
    studentsData?.edition[0].groups.flatMap((group) =>
      group.userGroups.map((userGroup) => ({
        fullName: userGroup.user.fullName ?? undefined,
        userId: userGroup.user.userId,
      })),
    ) ?? [];

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
              fullName={user.fullName ?? undefined}
              userId={user.userId}
            />
          );
        })}
      </div>
    </div>
  );
};
