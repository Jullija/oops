import { useContext } from "react";
import { UserEditionsContext } from "../../contexts/userEditionsContext";

export const useUserEditions = () => {
  const context = useContext(UserEditionsContext);
  if (!context) {
    throw new Error(
      "useUserEditions must be used within a UserEditionsProvider",
    );
  }
  return context;
};
