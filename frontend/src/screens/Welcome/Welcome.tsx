import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../contexts/userContext";
import { useAllUsersQuery } from "../../graphql/allUsers.graphql.types";
import { useUser } from "../../hooks/common/useUser";
import { pathsGenerator } from "../../router/paths";
import { Styles } from "../../utils/Styles";
import { Roles } from "../../utils/types";

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
      headers: { "x-hasura-role": Roles.UNAUTHENTICATED_USER },
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
    navigate(
      user.role === Roles.STUDENT
        ? pathsGenerator.student.StudentProfile
        : pathsGenerator.teacher.Groups,
    );
  };

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd podczas ładowania użytkowników.</div>;

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
                <td
                  style={{ color: user.role === "teacher" ? "red" : "black" }}
                >
                  {user.nick}
                </td>
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
            <h2>Wybrany użytkownik:</h2>
            <p>Nick: {selectedUser.nick}</p>
            <p>Rola: {selectedUser.role}</p>
            <p>ID: {selectedUser.userId}</p>
          </div>
        )}
      </div>
    </div>
  );
};
