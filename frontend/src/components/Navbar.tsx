import { useNavigate } from "react-router-dom";
import { Roles } from "../utils";
import { useUser } from "../contexts/userContext";
import { useUserEditionsQuery } from "../graphql/userEditions.graphql.types";
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
  const { user } = useUser();
  const { loading } = useUserEditionsQuery({
    skip: user.role === Roles.UNAUTHENTICATED_USER,
  });

  if (loading) return <div>Loading...</div>;

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
