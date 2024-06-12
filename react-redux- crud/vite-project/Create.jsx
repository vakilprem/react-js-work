import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./src/UserReducer";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/ ");
  }
  return (
    <div
      style={{ textAlign: "center" }}
      className="d-flex w-1000 vh-1000 justify-content-center align-items-center"
    >
      <div className="w-500 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
