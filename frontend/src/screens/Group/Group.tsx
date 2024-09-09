import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { GradeTable } from "./GradeTable";
import { useGroupScreenData } from "../../hooks/Group/useGroupScreenData";

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
  const id = params.id ? parseInt(params.id) : undefined;

  const { data, headers, loading, error } = useGroupScreenData(id);

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
      <GradeTable data={data} headers={headers} />
    </div>
  );
};
