import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { AllUsersQuery } from "../graphql/allUsers.graphql.types";
import { defaultUnauthenticatedUser } from "../utils/types";
import Cookies from "js-cookie";

export type User = AllUsersQuery["users"][number];

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const userCookie = Cookies.get("user");
    return userCookie ? JSON.parse(userCookie) : defaultUnauthenticatedUser;
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
