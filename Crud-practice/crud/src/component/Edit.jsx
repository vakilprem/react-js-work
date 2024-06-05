import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`https://66280047b625bf088c0a8529.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  }
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <div className="row">
      <div className="col-md-4 ">
        <h1>Update Form</h1>
        <div>
          <Link to={"/"}>
            <button className="btn btn-primary">Record List</button>
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age:</label>
              <input
                type="text"
                placeholder="Enter Your Age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email:</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary mt-1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
