import { useNavigate } from "react-router-dom";
import { useEditionsQuery } from "../../graphql/editions.graphql.types";
import { pathsGenerator } from "../../router/paths";

export const EditionsScreen = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useEditionsQuery();

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error?.message}</div>;

  return (
    <div>
      {data?.edition.map((edition) => (
        <div
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
