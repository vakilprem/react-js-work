import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Make() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3035/users", input).then((res) => {
      alert("Data Stored");
      navigate("/");
    });
  }
  return (
    <div className="d-flex w-100 justify-content-center align-item-center">
      <div className="w-50 bordered bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email"
              className="form-control"
            ></input>
            <br />
            <button className="btn btn-info">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Make;
