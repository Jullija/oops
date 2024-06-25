import { useNavigate, useParams } from "react-router-dom";
import { pathsGenerator } from "../../router";
import { Styles } from "../../utils";
import { useGetGroupQuery } from "../../graphql/getGroup.graphql.types";
import { StudentCard } from "./StudentCard";

const styles: Styles = {
  screenContainer: {
    margin: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  studentsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

export const Group = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data: groupData } = useGetGroupQuery({
    // TODO editionId should be changed
    variables: { editionId: "1", groupId: id ?? "-1" },
  });

  const students = groupData?.groups[0].userGroups.map((item) => item.user);
  const groupName = groupData?.groups[0].groupName;

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.GroupsList)}>
          go back to groups list
        </button>
        <div>{groupName}</div>
      </div>
      <div style={styles.studentsContainer}>
        {students?.map((user, index) => {
          return (
            <StudentCard
              key={index}
              firstName={user.firstName}
              secondName={user.secondName}
            />
          );
        })}
      </div>
    </div>
  );
};
