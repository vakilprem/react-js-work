import React from "react";
import Home from "../Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../Create";
import Update from "../Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
