import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserContext } from "../../contexts/userContext";
import { useAllUsersQuery } from "../../graphql/allUsers.graphql.types";
import { useCurrentUserLazyQuery } from "../../graphql/currentUser.graphql.types";
import { useUser } from "../../hooks/common/useUser";
import { pathsGenerator } from "../../router/paths";
import { Styles } from "../../utils/Styles";
import { Roles, defaultUnauthenticatedUser } from "../../utils/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { UsersRolesType } from "../../__generated__/schema.graphql.types";
import Cookies from "js-cookie";

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
  loginForm: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

export const Welcome = () => {
  const { user: selectedUser, setUser } = useUser();
  const { loading, error, data } = useAllUsersQuery({
    context: {
      headers: { "x-hasura-role": Roles.UNAUTHENTICATED_USER },
    },
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const context = useContext(UserContext);
  const [fetchCurrentUser, { data: currentUserData }] =
    useCurrentUserLazyQuery();

  useEffect(() => {
    if (data) {
      setFilteredUsers(
        data.users.filter((user) =>
          user.nick.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [searchTerm, data]);

  useEffect(() => {
    if (currentUserData) {
      let role = Roles.UNAUTHENTICATED_USER;
      switch (currentUserData.getCurrentUser?.role) {
        case UsersRolesType.Student:
          role = Roles.STUDENT;
          break;
        case UsersRolesType.Teacher:
          role = Roles.TEACHER;
          break;
        case UsersRolesType.Coordinator:
          role = Roles.COORDINATOR;
          break;
      }
      const userData = {
        userId:
          currentUserData.getCurrentUser?.userId ||
          defaultUnauthenticatedUser.userId,
        role: role || defaultUnauthenticatedUser.role,
        nick:
          currentUserData.getCurrentUser?.nick ||
          defaultUnauthenticatedUser.nick,
      };
      setUser(userData);
      // Store user data in cookies
      Cookies.set("user", JSON.stringify(userData));
      navigate(
        role === Roles.STUDENT
          ? pathsGenerator.student.StudentProfile
          : pathsGenerator.teacher.Groups,
      );
    }
  }, [currentUserData, setUser, navigate]);

  const handleUserSelect = (user: User) => {
    if (!context) {
      throw new Error("useContext must be used within a UserProvider");
    }
    const userData = {
      userId: user?.userId || defaultUnauthenticatedUser.userId,
      role: user?.role || defaultUnauthenticatedUser.role,
      nick: user?.nick || defaultUnauthenticatedUser.nick,
    };
    setUser(user);
    const token = "Bypass" + user.userId;
    Cookies.set("token", token || "");
    Cookies.set("user", JSON.stringify(userData));
    navigate(
      user.role === Roles.STUDENT
        ? pathsGenerator.student.StudentProfile
        : pathsGenerator.teacher.Groups,
    );
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!context) {
      throw new Error("useContext must be used within a UserProvider");
    }

    try {
      let token: string | undefined;
      if (password.length < 4) {
        token = "Bypass" + password;
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        token = await auth.currentUser?.getIdToken();
      }
      Cookies.set("token", token || "");
      fetchCurrentUser();
      setLoginError("");
    } catch (error) {
      setLoginError("Invalid email or password.");
    }
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
        <div style={styles.loginForm}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <p className="error">{loginError}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
