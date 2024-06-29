import React, { createContext, useState, ReactNode } from "react";
import { AllUsersQuery } from "../graphql/allUsers.graphql.types";

export type User = AllUsersQuery["users"][number];

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
