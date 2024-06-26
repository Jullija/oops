import React from "react";
import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router";
import { Styles } from "../utils";
import { useUserEditions } from "../hooks/useUserEditions";

const styles: Styles = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 12,
    borderBottom: "1px solid black",
  },
  navbarItem: {
    border: "1px solid black",
    padding: 12,
    cursor: "pointer",
  },
  select: {
    marginLeft: "auto",
    padding: 12,
    border: "1px solid black",
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { editions, selectedEdition, setSelectedEdition } = useUserEditions();

  const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedEdition = editions.find(
      (edition) => edition.editionId === selectedId,
    );
    if (selectedEdition) {
      setSelectedEdition(selectedEdition);
    }
  };

  return (
    <div style={styles.container}>
      {navigationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          style={styles.navbarItem}
        >
          {item.title}
        </div>
      ))}
      <select
        style={styles.select}
        onChange={handleEditionChange}
        value={selectedEdition?.editionId || ""}
      >
        {editions.map((edition) => (
          <option key={edition.editionId} value={edition.editionId}>
            {edition.name}
          </option>
        ))}
      </select>
    </div>
  );
};
