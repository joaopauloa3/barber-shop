import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/login/",
      JSON.stringify({ email, password }),
      {
        header: { "Content-type": "application/json" },
      }
    );
  };
  return (
    <div className="container-form">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
