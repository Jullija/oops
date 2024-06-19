import React, { createContext, useState, useContext, ReactNode } from "react";
import { AllUsersQuery } from "../graphql/allUsers.graphql.types";
import { UserEditionsQuery } from "../graphql/userEditions.graphql.types";

export type User = AllUsersQuery["users"][number];
export type Edition = UserEditionsQuery["edition"][number];

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  edition: Edition | null;
  setEdition: React.Dispatch<React.SetStateAction<Edition | null>>;
};

const defaultUnauthenticatedUser: User = {
  nick: "Guest",
  role: "unauthenticated_user",
  userId: "unauthenticated",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUnauthenticatedUser);
  const [edition, setEdition] = useState<Edition | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, edition, setEdition }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
