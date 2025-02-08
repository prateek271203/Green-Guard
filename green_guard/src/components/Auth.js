import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Static credentials
  const staticUser = {
    email: "admin@example.com",
    password: "admin123",
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (email === staticUser.email && password === staticUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password!");
      }
    } else {
      alert("Signup functionality is static. Use the login credentials.");
    }
  };

  return (
    <div className="auth-container d-flex flex-column align-items-center mt-2">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleAuth}>
        <input type="email" placeholder="Email" className="mt-2" onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" className="mt-2" onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit" className="mt-2">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
    </div>
  );
};

export default Auth;
