import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginSignup from "./LoginSignup";
import Dashboard from "./Dashboard";
import JournalPage from "./JournalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/journal" element={<JournalPage />} />
    </Routes>
  );
}

export default App;








