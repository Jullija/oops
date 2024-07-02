import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Styles } from "../utils/Styles";

const styles: Styles = {
  screenContainer: {
    width: "100%",
    minHeight: "100vh",
  },
};

export const Root = () => {
  return (
    <div style={styles.screenContainer}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
