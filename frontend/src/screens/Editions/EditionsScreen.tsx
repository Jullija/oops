import { useNavigate } from "react-router-dom";
import { useEditionsQuery } from "../../graphql/editions.graphql.types";
import { pathsGenerator } from "../../router/paths";
import { Styles } from "../../utils/Styles";

export const EditionsScreen = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useEditionsQuery();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return (
    <div style={styles.container}>
      {data?.edition.map((edition) => (
        <div
          style={styles.card}
          key={edition.editionId}
          onClick={() =>
            navigate(pathsGenerator.coordinator.Edition(edition.editionId))
          }
        >
          edition {edition.editionId}
        </div>
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    gap: 12,
    flexDirection: "row",
    margin: 12,
  },
  card: {
    border: "1px solid black",
    padding: 12,
  },
};
