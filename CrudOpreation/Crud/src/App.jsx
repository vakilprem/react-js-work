import React from "react";
import Create from "./Component/Create";
import { Route, Routes } from "react-router-dom";
import Read from "./Component/Read";
import Edit from "./Component/Edit";
import EmployeeData from "./EmployeeData";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container">
      {/* <EmployeeData /> */}
      <TodoList />
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
