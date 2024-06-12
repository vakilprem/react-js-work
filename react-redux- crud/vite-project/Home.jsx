import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="container">
      <h2>Crud App Using Jason Server</h2>
      <Link to={"/create"} className="btn btn-primary my-3">
        Create +
      </Link>
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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
