import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3035/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleDelete(id) {
    const confirm = window.confirm("Are sure to Delete data");
    if (confirm) {
      axios.delete(`http://localhost:3035/users/${id}`).then((resp) => {
        alert("Data Delted");
        window.location.reload();
        navigate("/");
      });
    }
  }
  return (
    <div className="container mt-5">
      <h1> Crud</h1>
      <div>
        <Link to={"/create"} className="btn btn-success my-3">
          Create
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link className="btn btn-primary" to={`/update/${d.id}`}>
                  Update
                </Link>
                <Link
                  onClick={(e) => handleDelete(d.id)}
                  className="btn btn-danger "
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
