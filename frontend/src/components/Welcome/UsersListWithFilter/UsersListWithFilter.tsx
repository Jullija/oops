import { useEffect, useState } from "react";
import { Styles } from "../../../utils/Styles";
import { UsersList } from "./UsersList";
import { AllUsersQuery } from "../../../graphql/allUsers.graphql.types";
import { User } from "../../../contexts/userContext";

type UsersListWithFilterProps = {
  data: AllUsersQuery | undefined;
  handleUserSelect: (user: User) => void;
};

export const UsersListWithFilter = ({
  data,
  handleUserSelect,
}: UsersListWithFilterProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredUsers(
        data.users.filter((user) =>
          user.nick.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [searchTerm, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <UsersList
        users={filteredUsers}
        handleUserClick={(user: User) => handleUserSelect(user)}
      />
    </div>
  );
};

const styles: Styles = {
  searchInput: {
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
  },
};
