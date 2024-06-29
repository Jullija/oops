import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAllUsersQuery } from "../graphql/allUsers.graphql.types";
import { paths } from "../router/paths";
import { Roles, Styles } from "../utils";
import { User } from "../contexts/userContext";
import { useUser } from "../hooks/useUser";

// TODO: again - chat gptd styles, also do not bother about this component, it is temporary till login isn't implemented
const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  userList: {
    flex: 1,
  },
  searchInput: {
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    cursor: "pointer",
  },
  selectedUser: {
    flex: 1,
    marginLeft: "20px",
  },
};

export const Welcome = () => {
  const { user: selectedUser, setUser } = useUser();
  const { loading, error, data } = useAllUsersQuery({
    context: {
      header: { "X-hasura-role": Roles.UNAUTHENTICATED_USER },
      noAuth: true,
    },
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setFilteredUsers(
        data.users.filter((user) =>
          user.nick.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [searchTerm, data]);

  const handleUserSelect = (user: User) => {
    setUser(user);
    navigate(paths.StudentProfile);
  };

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd podczas ładowania uzytkowników.</div>;

  return (
    <div style={styles.container}>
      <div style={styles.userList}>
        <h1>Witaj!</h1>
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Nick</th>
              <th>Role</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.userId}
                onClick={() => handleUserSelect(user)}
                style={styles.tableRow}
              >
                <td>{user.nick}</td>
                <td>{user.role}</td>
                <td>{user.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.selectedUser}>
        {selectedUser && (
          <div>
            <h2>Wybrany uzytkownik:</h2>
            <p>Nick: {selectedUser.nick}</p>
            <p>Rola: {selectedUser.role}</p>
            <p>ID: {selectedUser.userId}</p>
          </div>
        )}
      </div>
    </div>
  );
};
