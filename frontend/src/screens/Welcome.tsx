// Welcome.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAllUsersQuery } from "../graphql/allUsers.graphql.types";
import { paths } from "../router/paths";
import { Roles } from "../utils";
import { User, useUser } from "../contexts/userContext";

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
      setFilteredUsers(data.users);
    }
  }, [data]);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <h1>Welcome</h1>
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
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
                style={{ cursor: "pointer" }}
              >
                <td>{user.nick}</td>
                <td>{user.role}</td>
                <td>{user.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ flex: 1, marginLeft: "20px" }}>
        {selectedUser && (
          <div>
            <h2>Selected User:</h2>
            <p>Nick: {selectedUser.nick}</p>
            <p>Role: {selectedUser.role}</p>
            <p>User ID: {selectedUser.userId}</p>
          </div>
        )}
      </div>
    </div>
  );
};
