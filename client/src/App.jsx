import React, { useEffect } from "react";
import Register from "./pages/Registeration/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userLoggedIn")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
