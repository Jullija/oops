import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";

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

export const EditionScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const editionId = params.id ? parseInt(params.id) : undefined;

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.coordinator.Editions)}>
          go back to editions list
        </button>
        <div>params - edition id: {editionId}</div>
      </div>
    </div>
  );
};
