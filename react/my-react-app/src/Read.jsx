import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApidata] = useState([]);
  function getData() {
    axios
      .get("https://66280047b625bf088c0a8529.mockapi.io/crud")
      .then((resp) => {
        setApidata(resp.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const handleDelte = (id) => {
    axios
      .delete(`https://66280047b625bf088c0a8529.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  const SetData = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>EDit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            SetData(
                              item.id,
                              item.e_name,
                              item.e_age,
                              item.e_email
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure"))
                            handleDelte(item.id);
                        }}
                        className="btn btn-danger text-center"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
