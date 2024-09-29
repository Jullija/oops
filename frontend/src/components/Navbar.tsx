import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router/paths";
import { Styles } from "../utils/Styles";
import { useEditionSelection } from "../hooks/common/useEditionSelection";
import { useUser } from "../hooks/common/useUser";
import { hasRole, isEditionActive } from "../utils/utils";
import { defaultUnauthenticatedUser } from "../utils/types";
import Cookies from "js-cookie";

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
  const { selectedEdition } = useEditionSelection();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setUser({
      nick: defaultUnauthenticatedUser.nick,
      role: defaultUnauthenticatedUser.role,
      userId: defaultUnauthenticatedUser.userId,
    });

    navigate("/");
  };

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
      {user.userId !== "unauthenticated" && (
        <div onClick={handleLogout} style={styles.navbarItem}>
          Logout
        </div>
      )}
      {selectedEdition ? (
        <div style={styles.editionName}>
          edition: {selectedEdition.editionId},{" "}
          {isEditionActive(selectedEdition) ? "active" : "not active"}
        </div>
      ) : (
        <div>no edition selected</div>
      )}
    </div>
  );
};
