import { useNavigate } from "react-router-dom";
import { paths } from "../router";

type NavbarItem = {
  title: string;
  path: string;
};

export const Navbar = () => {
  const navigate = useNavigate();
  const navbarItems: NavbarItem[] = [
    {
      title: "welcome",
      path: paths.Welcome,
    },
    {
      title: "mock-data",
      path: paths.MockData,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginBottom: 12,
        borderBottom: "1px solid black",
      }}
    >
      {navbarItems.map((item, index) => (
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
