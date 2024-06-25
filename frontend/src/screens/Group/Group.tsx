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
    variables: { editionId: "1", groupId: id ?? "1" },
  });

  const users = groupData?.groups[0].userGroups.map((item) => item.user);

  console.log(users);

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.GroupsList)}>
          go back to groups list
        </button>
        <div>{groupData?.groups[0].groupName}</div>
      </div>
      <div style={styles.studentsContainer}>
        {users?.map((user, index) => {
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
