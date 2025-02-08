import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import EnergyMonitor from "./components/EnergyMonitor";
import WasteTracker from "./components/WasteTracker";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/energy"
          element={
            <EnergyMonitor />
          }
        />
        <Route
          path="/waste"
          element={
            <WasteTracker />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
