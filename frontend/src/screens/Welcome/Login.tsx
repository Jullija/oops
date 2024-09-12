// src/components/Login.tsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/common/useUser";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser(); // Access the setUser function from context or custom hook
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setUser({
        userId: location.state?.user?.userId,
        role: location.state?.user?.role || "", // Use the role passed from previous navigation, or set default
        nick: location.state?.user?.nick || "", // Use the nick passed from previous navigation, or set default
      });

      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
