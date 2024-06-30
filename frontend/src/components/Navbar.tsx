import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router";
import { Styles } from "../utils";
import { useEditionSelection } from "../hooks/useEditionSelection";
import { useUser } from "../hooks/useUser";
import { hasRole } from "../utils/utils";

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
  const { user } = useUser();

  const showEditionSelection = editions.length > 1;

  const filteredNavigationItems = navigationItems.filter((item) =>
    hasRole(user, item.allowedRoles),
  );

  return (
    <div style={styles.container}>
      {filteredNavigationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          style={styles.navbarItem}
        >
          {item.title}
        </div>
      ))}
      {!showEditionSelection && (
        <div style={styles.editionName}>{editions[0]?.name}</div>
      )}
      {showEditionSelection && (
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
      )}
    </div>
  );
};
