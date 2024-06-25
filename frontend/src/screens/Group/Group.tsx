import { useNavigate, useParams } from "react-router-dom";
import { pathsGenerator } from "../../router";
import { Styles } from "../../utils";

const styles: Styles = {
  group: {
    margin: 12,
    display: "flex",
    gap: 12,
  },
};

export const Group = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  return (
    <div style={styles.group}>
      <button onClick={() => navigate(pathsGenerator.GroupsList)}>
        go back to groups list
      </button>
      <div>group {id}</div>
    </div>
  );
};
