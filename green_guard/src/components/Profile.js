import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p>Email: admin@example.com</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
