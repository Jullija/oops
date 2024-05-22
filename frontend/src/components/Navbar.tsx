import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router";
import { Styles } from "../utils";

const styles: Styles = {
  container: {
    width: "100%",
    display: "flex",
    marginBottom: 12,
    borderBottom: "1px solid black",
  },
  navbarItem: {
    border: "1px solid black",
    padding: 12,
    cursor: "pointer",
  },
};

export const Navbar = () => {
  const navigate = useNavigate();

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
    </div>
  );
};
