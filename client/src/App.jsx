import React from "react";
import Register from "./pages/Registeration/Register";
import { Routes, Route, Navigate } from "react-router-dom";  // <-- Navigate import kiya
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
export const serverUrl = "https://taskifyapp-1yyh.onrender.com/api/v1";

const App = () => {
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
