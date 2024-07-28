import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { StudentSearcher } from "../Groups/StudentSearcher/StudentSearcher";
import { useStudentsSearchData } from "../../hooks/Groups/useStudentsSearchData";

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
};

export const Group = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { students, loading, error } = useStudentsSearchData(id ?? "-1");

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error.message}</div>;
  }

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.teacher.Groups)}>
          go back to groups list
        </button>
        <div>params - group id: {id}</div>
      </div>
      {students && <StudentSearcher students={students} />}
    </div>
  );
};
