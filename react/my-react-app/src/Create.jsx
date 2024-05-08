import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://66280047b625bf088c0a8529.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="row">
        <h1 className="text-center">Create Record</h1>
        <div className="mb-2 mt-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age</label>
              <input
                type="number"
                placeholder="Enter Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
