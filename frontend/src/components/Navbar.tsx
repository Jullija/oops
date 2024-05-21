import { useNavigate } from "react-router-dom";
import { navigationItems } from "../router";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginBottom: 12,
        borderBottom: "1px solid black",
      }}
    >
      {navigationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          style={{ border: "1px solid black", padding: 12, cursor: "pointer" }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
