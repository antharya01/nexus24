import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Rules from "./Components/Rules";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import Start from "./Components/Start";

import Leaderboard from "./Components/Leaderboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/start" element={<Start />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
