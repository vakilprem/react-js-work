import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3035/users/${id}`).then((res) => {
      setInput(res.data);
    });
  }, [id]);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3035/users/${id}`, input).then((res) => {
      alert("Data Updated");
      navigate("/");
    });
  }
  return (
    <div className="d-flex w-100 justify-content-center align-item-center">
      <div className="w-50 bordered bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">id:</label>
            <input
              type="number"
              disabled
              name="id"
              className="form-control"
              value={input.id}
            ></input>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email"
              value={input.email}
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

export default Update;
