import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router/paths";
import { Styles } from "../utils/Styles";
import { useEditionSelection } from "../hooks/common/useEditionSelection";
import { useUser } from "../hooks/common/useUser";
import { hasRole } from "../utils/utils";

export const NAV_BAR_HEIGHT = 100;

const styles: Styles = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid black",
    height: NAV_BAR_HEIGHT,
  },
  navbarItem: {
    border: "1px solid black",
    padding: 12,
    cursor: "pointer",
  },
  editionName: {
    marginLeft: "auto",
    padding: 12,
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { editions } = useEditionSelection();
  const { user } = useUser();

  const showCurrentEdition = editions.length > 1;

  return (
    <div style={styles.container}>
      {navigationItems
        .filter((item) => hasRole(user, item.allowedRoles))
        .map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            style={styles.navbarItem}
          >
            {item.title}
          </div>
        ))}
      {!showCurrentEdition && (
        <div style={styles.editionName}>{editions[0]?.name}</div>
      )}
    </div>
  );
};
