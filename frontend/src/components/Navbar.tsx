import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router";
import { Styles } from "../utils";
import { useEditionSelection } from "../hooks/useEditionSelection";

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
  editionName: {
    marginLeft: "auto",
    padding: 12,
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { editions, selectedEdition, handleEditionChange } =
    useEditionSelection();

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
      {editions.length === 1 ? (
        <div style={styles.editionName}>{editions[0].name}</div>
      ) : editions.length > 1 ? (
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
      ) : null}
    </div>
  );
};
