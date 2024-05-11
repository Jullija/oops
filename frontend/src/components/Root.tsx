import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Root = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
