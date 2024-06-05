import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [api, setApi] = useState([]);
  function getData() {
    axios
      .get("https://66280047b625bf088c0a8529.mockapi.io/crud")
      .then((resp) => {
        setApi(resp.data);
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

  const setStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="mb-2 mt-2">
          <Link to={"/create"}>
            <button className="btn btn-primary">Record List</button>
          </Link>
        </div>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delte</th>
            </tr>
          </thead>
          <tbody>
            {api.map((item) => {
              return (
                <>
                  <tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to={"/edit"}>
                        {" "}
                        <button
                          onClick={() =>
                            setStorage(
                              item.id,
                              item.e_name,
                              item.e_name,
                              item.e_email
                            )
                          }
                          className="btn btn-primary text-center"
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm("Are yo sure?")) {
                            handleDelte(item.id);
                          }
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
