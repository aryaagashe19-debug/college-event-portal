import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);

    if (role === "admin") navigate("/admin");
    else if (role === "volunteer") navigate("/volunteer");
    else navigate("/");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="volunteer">Volunteer</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;