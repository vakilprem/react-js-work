import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [first, setFirst] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to={"/"}>
              <button className="btn btn-primary">Creat Record</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Enter Name:
                <input
                  type="text"
                  placeholder="name"
                  className="from-control"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Enter Age:
                <input
                  type="text"
                  placeholder="age"
                  className="from-control"
                  onChange={(e) => setAge(e.target.value)}
                ></input>
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>oEnter Email:</label>
              <input
                type="text"
                placeholder="email"
                className="from-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
