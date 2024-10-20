import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { CurrentUserQuery } from "../graphql/currentUser.graphql.types";
import { defaultUnauthenticatedUser } from "../utils/types";
import Cookies from "js-cookie";

// Define the User and Edition types based on the CurrentUserQuery
export type User = CurrentUserQuery["getCurrentUser"];
export type Edition = NonNullable<
  User["userGroups"][number]
>["group"]["edition"];

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  selectedEdition?: Edition;
  setSelectedEdition: Dispatch<SetStateAction<Edition | undefined>>;
  editions: Edition[];
  setEditions: Dispatch<SetStateAction<Edition[]>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Initialize user state from cookies or default to unauthenticated user
  const [user, setUser] = useState<User>(() => {
    const userCookie = Cookies.get("user");
    return userCookie ? JSON.parse(userCookie) : defaultUnauthenticatedUser;
  });

  // State for selected edition and list of editions
  const [selectedEdition, setSelectedEdition] = useState<Edition | undefined>(
    undefined,
  );
  const [editions, setEditions] = useState<Edition[]>([]);

  // Update editions and selectedEdition when the user changes
  useEffect(() => {
    if (user && user.userGroups && user.userGroups.length > 0) {
      // Filter out null user groups before accessing 'group'
      const editionsFromUser = user.userGroups
        .filter(
          (ug): ug is NonNullable<typeof ug> =>
            ug != null && ug.group != null && ug.group.edition != null,
        )
        .map((ug) => ug.group.edition);
      setEditions(editionsFromUser);
      if (!selectedEdition) {
        setSelectedEdition(editionsFromUser[0]);
      }
    } else {
      // If the user has no editions, reset the editions state
      setEditions([]);
      setSelectedEdition(undefined);
    }
  }, [user, selectedEdition]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        selectedEdition,
        setSelectedEdition,
        editions,
        setEditions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
