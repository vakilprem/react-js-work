import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://66280047b625bf088c0a8529.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to={"/"}>
              <button className="btn btn-primary">Edit Record</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Edit Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name:</label>
              <input
                type="text"
                placeholder="name"
                className="from-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="form-group">
              <label>Enter Age:</label>
              <input
                type="text"
                placeholder="age"
                className="from-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="form-group">
              <label>oEnter Email:</label>
              <input
                type="text" 
                placeholder="email"
                className="from-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="submit"
                className="btn btn-secondary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
