import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { useGroupScreenData } from "../../hooks/Group/useGroupScreenData";
import { GroupTableWithFilters } from "../../components/Group/table/GroupTableWithFilters";

export const Group = () => {
  const navigate = useNavigate();
  const params = useParams();
  const groupId = params.id ? parseInt(params.id) : undefined;

  const { rows, categories, loading, error } = useGroupScreenData(groupId);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.teacher.Groups)}>
          go back to groups list
        </button>
        <div>params - group id: {groupId}</div>
      </div>

      <GroupTableWithFilters rows={rows} categories={categories} />
    </div>
  );
};

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
