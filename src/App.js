import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import UserSettings from "./components/UserSettings";
import OtherProfile from "./components/OtherProfile";
import Verify from "./components/Verify";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/verify" element={<Verify/>} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/settings" element={<UserSettings/>} />
      <Route path={`/profile/`} element={<OtherProfile/>} />
    </Routes>
  );
}

export default App;