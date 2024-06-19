import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Roles } from "../utils";
import { useUser } from "../contexts/userContext";
import { useUserEditionsQuery } from "../graphql/userEditions.graphql.types";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, edition, setEdition } = useUser();
  const { loading, data } = useUserEditionsQuery({
    skip: user.role === Roles.UNAUTHENTICATED_USER,
  });

  const [selectedEditionId, setSelectedEditionId] = useState<
    string | undefined
  >(edition?.editionId);

  useEffect(() => {
    if (data?.edition && data.edition.length === 1 && !edition) {
      setEdition(data.edition[0]);
      setSelectedEditionId(data.edition[0].editionId);
    }
  }, [data, edition, setEdition]);

  useEffect(() => {
    if (data?.edition && !selectedEditionId && !edition) {
      setEdition(data.edition[0]);
      setSelectedEditionId(data.edition[0].editionId);
    }
  }, [data, selectedEditionId, setEdition, edition]);

  const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEdition = data?.edition.find(
      (ed) => ed.editionId === event.target.value,
    );
    if (selectedEdition) {
      setEdition(selectedEdition);
      setSelectedEditionId(selectedEdition.editionId);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {user.role === Roles.STUDENT && (
          <>
            <div
              onClick={() => navigate("/student-profile")}
              style={{
                border: "1px solid black",
                padding: 12,
                cursor: "pointer",
              }}
            >
              Student Profile
            </div>
            <div
              onClick={() => navigate("/hall-of-fame")}
              style={{
                border: "1px solid black",
                padding: 12,
                cursor: "pointer",
              }}
            >
              Hall of Fame
            </div>
          </>
        )}
      </div>
      {user.role !== Roles.UNAUTHENTICATED_USER && data?.edition && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {data.edition.length > 1 ? (
            <select value={selectedEditionId} onChange={handleEditionChange}>
              {data.edition.map((edition) => (
                <option key={edition.editionId} value={edition.editionId}>
                  {edition.label}
                </option>
              ))}
            </select>
          ) : (
            <div>{data.edition[0].name}</div>
          )}
        </div>
      )}
    </div>
  );
};
