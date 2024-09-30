import { useState } from "react";
import { Styles } from "../../utils/Styles";
import { useLogin } from "../../hooks/auth/useLogin";

export const LoginForm = () => {
  const { loginWithCredentials } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await loginWithCredentials({ email, password });
      setLoginError("");
    } catch (error) {
      console.error("ERROR: ", error);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div style={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
  );
};

const styles: Styles = {
  loginForm: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};
