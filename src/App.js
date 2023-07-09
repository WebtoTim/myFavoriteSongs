import React, { createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import UserSettings from "./components/UserSettings";
import OtherProfile from "./components/OtherProfile";

export const MyUserData = createContext();

const code = new URLSearchParams(window.location.search).get('code');

function App() {

  return (
    <>
      { code ? <Home code={code}/> : <Login /> }
      
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home code={code}/>} />
        <Route path="/profile" element={<UserProfile code={code}/>} />
        <Route path="/settings" element={<UserSettings code={code}/>} />
        <Route path="/profile/:id" element={<OtherProfile code={code}/>} />
      </Routes>
    </>
  )
}

export default App;