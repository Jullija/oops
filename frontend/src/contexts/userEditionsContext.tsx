import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  useUserEditionsQuery,
  UserEditionsQuery,
} from "../graphql/userEditions.graphql.types";
import { Roles } from "../utils/types";
import { useUser } from "../hooks/common/useUser";

export type Edition = UserEditionsQuery["edition"][number];

type UserEditionsContextType = {
  selectedEdition?: Edition;
  setSelectedEdition: React.Dispatch<React.SetStateAction<Edition | undefined>>;
  editions: Edition[];
  setEditions: React.Dispatch<React.SetStateAction<Edition[]>>;
};

export const UserEditionsContext = createContext<
  UserEditionsContextType | undefined
>(undefined);

export const UserEditionsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [selectedEdition, setSelectedEdition] = useState<Edition | undefined>(
    undefined,
  );
  const [editions, setEditions] = useState<Edition[]>([]);

  const { data } = useUserEditionsQuery({
    skip: user.role === Roles.UNAUTHENTICATED_USER,
  });

  useEffect(() => {
    if (data && data.edition.length > 0) {
      setEditions(data.edition);
      if (!selectedEdition) {
        setSelectedEdition(data.edition[0]);
      }
    }
  }, [data, selectedEdition]);

  return (
    <UserEditionsContext.Provider
      value={{ selectedEdition, setSelectedEdition, editions, setEditions }}
    >
      {children}
    </UserEditionsContext.Provider>
  );
};
