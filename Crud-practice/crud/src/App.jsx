import React from "react";
import { Route, Routes } from "react-router-dom";
import Read from "./component/Read";
import Create from "./component/Create";
import Edit from "./component/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
