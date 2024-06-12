// import React from 'react'
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/player/:id" element={<Player />}></Route>
      </Routes>
    </div>
  );
}

export default App;
