import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
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
  };
  return (
    <>
      <div className="row">
        <h1 className="text-center">Update Record</h1>
        <div className="mb-2 mt-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="col-md-4">
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="form-control"
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age</label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Enter Age"
                className="form-control"
                // onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter Email"
                className="form-control"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="update" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
