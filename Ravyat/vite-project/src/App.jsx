import React from "react";
import ToDoList from "./ToDoList";
import "./App.css";
import FormValidation from "./FormValidation";
import "bootstrap/dist/css/bootstrap.min.css";

// import WeatherApp from "./WeatherApp";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Make from "./Make";
import Update from "./Update";
function App() {
  return (
    <div>
      {/* <ToDoList /> */}
      {/* <FormValidatison /> */}
      {/* <WeatherApp/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Make />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
