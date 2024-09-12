import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { AllUsersQuery } from "../graphql/allUsers.graphql.types";

export type User = AllUsersQuery["users"][number];

type UserContextType = {
  // TODO: remove token from here, only needed for bypass
  token: string | null;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  setToken: (token: string | null) => void;
};

const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: "unauthenticated_user",
  userId: "unauthenticated",
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUnauthenticatedUser);
  const [token, setToken] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
